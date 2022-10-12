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
    <footer-comp/>
 </v-app>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
export default { 
  name: 'App',


  components: {
    HeaderComp,
    FooterComp
  },
};
</script>

<style >
</style>