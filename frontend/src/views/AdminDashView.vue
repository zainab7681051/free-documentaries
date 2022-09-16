<template>
  <v-app>
    <v-main>
    	  <admin-comp/>
    </v-main>
  </v-app>
</template>

<script>
  import AdminComp from '../components/AdminComp.vue'

  export default {
    name: 'dashboard',
	
	data: () => ({
    //
  }),

    components: {
      AdminComp,
    },
  }
</script>
