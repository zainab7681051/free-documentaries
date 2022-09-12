<template>
  <v-app>
    <v-main>
    	<main-comp msg="FREE DOCUMENTARIES FROM YOUTUBE" />
    </v-main>
  </v-app>
</template>

<script>
  import MainComp from '../components/MainComp.vue'

  export default {
    name: 'docs',
      data: () => ({
    //
  }),

    components: {
      MainComp,
    },
  }
</script>
