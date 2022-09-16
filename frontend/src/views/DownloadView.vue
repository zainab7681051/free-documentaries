<template>
  <v-app>
    <v-main>
    	  <main-comp msg="DOWNLOAD" />
    </v-main>
  </v-app>
</template>

<script>
  import MainComp from '../components/MainComp.vue'

  export default {
    name: 'download',
  	
  	data: () => ({
      //
    }),

    components: {
      MainComp,
    },
  }
</script>
