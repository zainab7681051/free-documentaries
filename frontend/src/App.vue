<template>
  <v-app>
<!-- ******************************* -->
    <!-- SITE HEADER -->
    <header-comp/>
<!-- ******************************* -->
<!-- SITE MAIN -->
    <main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </main>
 </v-app>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'

export default { 
  name: 'App',


  components: {
    HeaderComp,
  },
};
</script>

<style >
</style>