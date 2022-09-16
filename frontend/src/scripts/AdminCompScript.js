import {mapState} from 'vuex'
import DocsService from '../service/docs.js'

export default {
  name: 'admin-comp',
  
  data: () => ({
    fatalError:'',
    dialog:false,
    docs:{},

  }),
  
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  
  async mounted(){      
    try {
      this.docs=(await DocsService.getAllAsAdmin()).data
      console.log("DOCS",this.docs)
      
    } catch (e) {
      this.fatalError=e.response.data.error;
      this.dialog=true
    }
    
  },  
  
  methods:{

  },
  
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
          try{
            this.docs = (await DocsService.getAllAsAdmin(value)).data
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
