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
    docs:{},
    download:false,
    dialog2:false
  }),


  async mounted(){      
    try {
      this.docs=(await DocsService.getAll()).data
    } catch (e) {
      this.fatalError=e.response.data.error;
      this.dialog=true
    }
    
  },  
  
  methods: {
      async watch (youtubeId,title) {
        try {
          this.youtubeId=youtubeId
          this.title=title
          this.player=true
          this.dialog2=true

        }catch(e) {
          this.player=false
          this.fatalError='something went wrong in the video player...';
          this.dialog=true
        }
    },
    /*async download(){
      try{
  
      }catch(e){
        console.log(e)
      }
    }*/ 
  },

  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
          try{
            this.docs = (await DocsService.getAll(value)).data
          }catch(e){
            this.fatalError=e.response.data.error;
            this.dialog=true

          }
      }
    }
  }

}

