import { validationMixin } from 'vuelidate'
import { required} from 'vuelidate/lib/validators'
import {mapState} from 'vuex'
import AdminService from '../service/admin.js'

export default {
  name: 'admin-comp',
  mixins: [validationMixin],
  data: () => ({
    fatalError:'',
    dialog:false,
    docs:{},
    addingDoc:false,
    title: '',
    description: '',
    imageAdress: '',
    youtubeId: '',
    genres: {},
    chosenGenres:[],
    deletingAll: false,
    loading:false,
    fetch: false,
    editingDoc:false,
    id:0

  }),

    validations: {
    title: { 
      required, 
    },
    description:{
      required,
    },
    imageAdress: { 
      required, 
    },
    youtubeId:{
      required,
    }
  },
  
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ]),
      titleErrors () {
        const errors = []
        if (!this.$v.title.$dirty) return errors
        !this.$v.title.required && errors.push('title is required.')
        return errors
      },
      descriptionErrors () {
        const errors = []
        if (!this.$v.description.$dirty) return errors
        !this.$v.description.required && errors.push('description is required')
        return errors
      },
      imageAdressErrors () {
        const errors = []
        if (!this.$v.imageAdress.$dirty) return errors
        !this.$v.imageAdress.required && errors.push('imageAdress is required.')
        return errors
      },
      youtubeIdErrors () {
        const errors = []
        if (!this.$v.youtubeId.$dirty) return errors
        !this.$v.youtubeId.required && errors.push('youtubeId is required')
        return errors
      }
  },
  
  methods:{
    async add(){
      if( !this.$v.title.$invalid&&
          !this.$v.description.$invalid&&
          !this.$v.imageAdress.$invalid&&
          !this.$v.youtubeId.$invalid&&
          this.chosenGenres.length!=0){
        try {
          const data={
            title: this.title,
            description: this.description,
            imageAdress: this.imageAdress,
            youtubeId: this.youtubeId,
          }
          await AdminService.add(data)
          this.docs=(await AdminService.getAllAsAdmin()).data
          
          await this.chosenGenres.map(chosenGenre=>{
            AdminService.createAssociation(this.docs[0].id,chosenGenre.id)
          })
          this.addingDoc=false;
          this.dialog = false;
        } catch(e) {
          console.log('add',e);
          this.addingDoc=false;
          this.dialog = false;
          this.fatalError=e.response.data.error;
          this.dialog=true
        }
      }else{
        this.addingDoc=false;
        this.dialog = false;
        this.fatalError='no empty or invalid forms'
        this.dialog=true
        }
      },

      async addGenre(genre){
        try {
          await this.chosenGenres.push(genre)

        } catch(e) {
          console.log('addGenre',e);
          this.fatalError="something went wrong...";
          this.dialog=true
        }
      },

      async deleteAll(){
        try {
          this.deletingAll=false;
          this.loading=true
          const x=await AdminService.deleteAll()
          this.docs={}
        } catch(e) {
          // statements
          console.log('deleteAll',e.response);
          this.loading=false;
          this.fatalError=e.response.data.error;
          this.dialog=true
        } finally {
          this.loading=false
          if(!this.fatalError){this.dialog = false;}
        }
      },

      async deleteOne(id){
        try {
          await AdminService.deleteOne(id)
          this.docs=(await AdminService.getAllAsAdmin()).data
        } catch(e) {
          // statements
          console.log('deleteOne',e);
          this.fatalError=e.response.data.error;
          this.dialog=true
        }
      },

      setDoc(doc){
        this.id=doc.id
        this.title=doc.title
        this.description=doc.description
        this.imageAdress=doc.imageAdress
        this.youtubeId=doc.youtubeId
        doc.genres.map(genre=>this.chosenGenres.push(genre))
      },

      async edit(){
        if(!this.$v.title.$invalid&&
          !this.$v.description.$invalid&&
          !this.$v.imageAdress.$invalid&&
          !this.$v.youtubeId.$invalid&&
          this.chosenGenres.length!=0){
          try {
            const data={
              title: this.title,
              description: this.description,
              imageAdress: this.imageAdress,
              youtubeId: this.youtubeId,
            }

            await AdminService.deleteAssociation(this.id)

            await AdminService.update(this.id,data)

            this.docs=(await AdminService.getAllAsAdmin()).data

            await this.chosenGenres.map(chosenGenre=>{
              console.log(chosenGenre.genre)
              AdminService.createAssociation(this.id,chosenGenre.id)
            })
            this.editingDoc=false;
            this.dialog = false;
          } catch(e) {
            // statements
            console.log('edit',e);
            this.editingDoc=false;
            this.dialog = false;
            this.fatalError=e.response.data.error;
            this.dialog=true
          }
        }else{
        this.addingDoc=false;
        this.dialog = false;
        this.fatalError='no empty or invalid forms'
        this.dialog=true
        }
      
    },

      async clear () {
                
        try {
          this.$v.$reset()
          this.title = ''
          this.description = ''
          this.imageAdress = ''
          this.youtubeId = ''
          this.chosenGenres=[],
          this.id=0
        } catch (e) {
          console.log(e)
        
        }
        
      },
  },
  
  /*watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
          try{
            this.docs = (await AdminService.getAllAsAdmin(value)).data
          }catch(e){
            this.fatalError=e.response.data.error;
            this.dialog=true

          }
      }
    }
  },
*/

  async mounted(){      
    try {
      this.fatalError=''
      this.fetch=true
      this.loading=true
      this.dialog=true
      this.genres=(await AdminService.getGenresAsAdmin()).data
      this.docs=(await AdminService.getAllAsAdmin()).data
      
    } catch (e) {
      this.loading=false
      this.fetch=false
      this.fatalError=e.response.data.error;
    } finally {
      this.loading=false
      this.fetch=false
      if(!this.fatalError){this.dialog = false;}
    }
    
  },  
  props: {
  }
}
