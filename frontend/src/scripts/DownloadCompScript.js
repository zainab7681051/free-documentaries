import {mapState} from 'vuex'
import DocsService from '../service/docs.js'

export default {
  name: 'download-comp',
  
  data:()=>({
    youtubeId:'',
    docId:''
  }),

  async mounted(){
    const params=await this.$store.state.route.params.docId
    const x=params.split('+')
    this.docId=x[0]
    this.youtubeId=x[1]
  },
  
  methods: {

  },

}

