<template>
  <v-app>
    <v-main>
    	  <main-comp msg="CONTACT US" />
    </v-main>
  </v-app>
</template>

<script>
  import MainComp from '../components/MainComp.vue'

  export default {
    name: 'contact',
	
	data: () => ({
    //
  }),

    components: {
      MainComp,
    },
  }
</script>
