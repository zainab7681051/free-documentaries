<template>
  <v-app>
    <v-main>
    	  <main-comp msg="EDIT YOUR PROFILE" />
    </v-main>
  </v-app>
</template>

<script>
  import MainComp from '../components/MainComp.vue'

  export default {
    name: 'edit-profile',
	
	data: () => ({
    //
  }),

    components: {
      MainComp,
    },
  }
</script>
