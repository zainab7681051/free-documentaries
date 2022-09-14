import {mapState} from 'vuex'
import _ from 'lodash'

export default {
  name: 'header-comp',
  
  data: () => ({
    drawer:null,
    search:''
  }),

  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  methods:{
    logout(){
      this.$store
      .dispatch('setToken', null)
      
      this.$store
      .dispatch('setUser', null)

      this.$router
      .push({
        name: 'welcome'
      })

    }
  },

  watch: {
    search: _.debounce( function(value) {
      const route = {
        name: 'docs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 800),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  },

  props: {
    msg: String
  }
}
