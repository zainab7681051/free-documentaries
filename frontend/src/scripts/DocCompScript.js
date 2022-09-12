import {mapState} from 'vuex'
import DocsService from '../service/docs.js'

export default {
  name: 'doc-comp',
  
  data:()=>({
    fatalError:'',
    dialog:false,
    docs:{}
  }),


  async mounted(){      
    try {
      
      this.docs=(await DocsService.getAll()).data
      
    } catch (e) {
    console.log(e)
    }
    
  },  
  
  methods: {
    async watch () {
        try {
            this.docs=(await DocsService.getAll()).data
            this.docs.map(d=>console.log(d))
        }catch(error) {
          this.fatalError=error.response.data.error;
          this.dialog=true
        }
    },

/*  async guestCheck(todo){ 
    try {
      
      await this.$store.dispatch(
      'Check',todo)
      this.toDoList=await this.$store.state.todo
      this.clear()            
       
    } catch (error) {
      this.fatalError=error.response.data.error;
      this.dialog=true
    }
    
    },

*/
  },

}
