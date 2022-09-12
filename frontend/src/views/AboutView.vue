<template>
  <v-app>
    <v-main>
    	  <main-comp msg="ABOUT US" />
    </v-main>
  </v-app>
</template>

<script>
  import MainComp from '../components/MainComp.vue'

  export default {
    name: 'about',
	
	data: () => ({
    //
  }),

    components: {
      MainComp,
    },
  }
</script>
