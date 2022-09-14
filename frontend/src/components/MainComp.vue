<template>
  <v-layout column>
  <v-layout><!-- 
    <v-container> -->
    <v-flex xs12>
      <v-card>
        <v-card-title
        style="background-color:#ab92b3;">
          {{msg}}
        </v-card-title>
          <doc-comp v-if="msg=='FREE DOCUMENTARIES FROM YOUTUBE'"/>

          <edit-prof-comp v-if="msg=='EDIT YOUR PROFILE' && isUserLoggedIn"/> 

          <about-comp v-if="msg=='ABOUT US'"/>

          <contact-comp v-if="msg=='CONTACT US'"/> 
          
          <download-comp v-if="msg=='DOWNLOAD'"/> 
          
        </v-card>
    </v-flex><!-- 
  </v-container> -->
  </v-layout>
</v-layout>
</template>

<script>
import DocComp from './DocComp.vue'
import EditProfComp from './EditProfComp.vue'
import AboutComp from './AboutComp.vue'
import ContactComp from './ContactComp.vue'
import {mapState} from 'vuex'

export default {
  name: 'main-comp',

  data: () => ({
  }),

  props: {
    msg: String
  },

  computed: {
    ...mapState([
      'isUserLoggedIn',
    ])
  },

  components:{
    DocComp,
    EditProfComp,
    AboutComp,
    ContactComp,
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  
</style>
