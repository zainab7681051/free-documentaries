<template>
    <v-container>
    <v-row>
      <v-col cols="12">
      <v-card style="border:3px solid #ab92b3;" align="center">
        <v-avatar class="mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path fill="#ab92b3" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm11.201 44.508H20.799V41.39L35.63 22.63H21.173v-5.138h21.988v4.861L28.139 41.39h15.063v5.118z"/></svg>
          </v-avatar>
          <v-card-subtitle class="text--primary"> Zainab, FULL STACK DEVELOPER
          </v-card-subtitle>
        <v-card-text>
          Hi, I'm Zainab, a web developer. I designed and developed this project using Vue and Vuetify and some Tailwind Css here and there. the backend of this project is in Nodejs Express with Postgres Database. I create other projects like this. You can find more in my <a href="" class="link">Porfolio</a> and you can check out my <a href="https://github.com/zainab7681051" class="link">Github</a> repos for the source-code.  
        </v-card-text>
      </v-card>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'about-comp',
  props: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .link {
  box-shadow: inset 0 0 0 0 #ab92b3;
  color: #ab92b3;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}
.link:hover {
  color: #fff;
  box-shadow: inset 200px 0 0 0 #ab92b3;;
}

/* Presentational styles */
.link {
  color: #ab92b3;
  text-decoration: none;
}

</style>
