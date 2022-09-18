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
    chosenGenres:[]

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

  async mounted(){      
    try {
      this.docs=(await AdminService.getAllAsAdmin()).data
      this.genres=(await AdminService.getGenresAsAdmin()).data
      console.log("DOCS",this.docs)
      console.log("GENRES",this.genres)
      console.log(this.docs[0].id)
      
    } catch (e) {
      this.fatalError=e.response.data.error;
      this.dialog=true
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
          console.log(this.docs[0].id,chosenGenre.id)
          await this.chosenGenres.map(chosenGenre=>{
            AdminService.createAssociation(this.docs[0].id,chosenGenre.id)
          })
          this.addingDoc=false;
          this.dialog = false;
        } catch(e) {
          console.log(e);
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
          console.log(e);
          this.addingDoc=false;
          this.dialog = false;
          this.fatalError="something went wrong...";
          this.dialog=true
        }
      },

      clear () {
        this.$v.$reset()
        this.title = ''
        this.description = ''
        this.imageAdress = ''
        this.youtubeId = ''
        this.chosenGenres=[]
      },
    

  },
  
  watch: {
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

  props: {
  }
}
