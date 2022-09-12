import {mapState} from 'vuex'
import DocsService from '../service/docs.js'

export default {
  name: 'doc-comp',
  
  data:()=>({
    fatalError:'',
    dialog:false,
    player:false,
    youtubeId:'',
    title:'',
    search:'',
    docs:{}
  }),


  async mounted(){      
    try {
      this.docs=(await DocsService.getAll(this.search)).data
    } catch (e) {
    console.log(e)
    }
    
  },  
  
  methods: {
    async watch (youtubeId,title) {
        try {
          console.log(youtubeId, title)
          this.youtubeId=youtubeId
          this.title=title
          this.player=true
        }catch(e) {
          console.log(e)
          this.player=false
          this.fatalError='something went wrong...';
          this.dialog=true
        }
    },
    async Search(){
      try {
        this.search=this.$store.state.search
        this.docs=(await DocsService.getAll(this.search)).data
        this.search=''
      } catch (e) {
        console.log(e)
        this.fatalError='could not find documentary...';
        this.dialog=true
      }
    }

  },

}

