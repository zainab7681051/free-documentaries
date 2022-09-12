<template>
  <v-app id="inspire">
<!-- ******************************* -->
    <!-- SITE HEADER -->
    <header-comp/>
<!-- ******************************* -->
<!-- SITE MAIN -->
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
<!-- ******************************* -->
    <!-- SITE FOOTER -->
<!-- ******************************* -->
  </v-app>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'

export default { 
  name: 'App',

  data: () => ({
    
  }),

    components: {
      HeaderComp,
    },
};
</script>
