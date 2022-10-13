<template>
    <v-footer
      
    >
    <v-container>
    <v-card>
    <v-row>
      <v-col cols="12" md="4"
      lg="3">
        <v-card
          flat
          tile
          width="100%"
        >
        <v-card-subtitle>
          <v-btn icon
          href="https://github.com/zainab7681051/free-documentaries"
          target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z"/>
            </svg>
          </v-btn>
          edit this project on Github
        </v-card-subtitle>
        </v-card>
      </v-col>

      <v-col cols="12" md="4"
      lg="3">
      <v-card 
        flat
        tile
        width="100%"
        >
        <v-card-subtitle><v-btn icon 
        href="https://en.wikipedia.org/wiki/Documentary_film"
        target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 464 448"><path fill="currentColor" d="M462 33h-95l-7 1v10q0 2 4 2q1 1 4 1l9 1q11 0 17 6q5 7 1 19l-84 220l-3-1l-54-121l1-2l44-90q7-14 13-22q4-9 19-10q3 0 3-3V34q-53-1-76 0v12q1 1 2 1l4 1q12 0 15 5t-2 20l-34 74l-30-69v-1q-11-23-6-27q3-1 8-2l4-1q3 0 3-3V34h-82v10q0 2 6 4q10 1 13.5 5.5T174 82l8 18l32 68q3 9 9 23l-46 101l-3-1Q103 125 82 70q-3-9-3-13q0-9 14-9h14q7 0 7-4v-9l-4-1H5l-3 1v9q0 2 6 4q15 0 22 5q5 7 11 24q13 33 54 129.5T150 339q13 30 29-1q22-46 55-121q6 15 17 42t19.5 47.5T284 338q14 32 29 0L417 79q6-15 14-23q9-8 28-9q3 0 3-3V33z"/></svg></v-btn>
          Wiki Documentaries
        </v-card-subtitle>
      </v-card>
      </v-col>

      <v-col cols="12" md="4"
      lg="3">
        <v-card
          flat
          tile
          width="100%"
        >
        <v-card-subtitle><v-btn icon 
        @click="$router.push('/about')">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4.111 2.18a7 7 0 1 1 7.778 11.64A7 7 0 0 1 4.11 2.18zm.556 10.809a6 6 0 1 0 6.666-9.978a6 6 0 0 0-6.666 9.978zM6.5 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0zM8 11a3 3 0 0 1-2.65-1.58l-.87.48a4 4 0 0 0 7.12-.16l-.9-.43A3 3 0 0 1 8 11z" clip-rule="evenodd"/></svg></v-btn>
          About us
        </v-card-subtitle>
      </v-card>
      </v-col>
      
      <v-col cols="12" md="4"
      lg="3">
        <v-card
          flat
          tile
          width="100%"
        >
        <v-card-subtitle><v-btn icon 
        @click="$router.push('/contact')">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"/></svg></v-btn>
          Contact Us
        </v-card-subtitle>
      </v-card>
      </v-col>

        <v-card-text class="text-center">
          {{ new Date().getFullYear() }} — 
          <strong>made with
            <v-btn icon
            href="https://vuejs.org/"
            target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.70em" height="1.70em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 221"><path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"/><path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"/><path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"/></svg>
            </v-btn>
            ,<v-btn icon
            href="https://vuetifyjs.com/en/"
            target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="1.70em" height="1.70em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 222"><path fill="#1697F6" d="m130.711 49.564l-51.043 88.428L128 221.754l64.015-110.877L256 0h-96.692z"/><path fill="#AEDDFF" d="m64.015 110.877l3.352 5.831l47.748-82.742L134.734 0H0z"/><path fill="#1867C0" d="M159.308 0C183.503 79.623 128 221.754 128 221.754l-48.332-83.762L159.308 0Z"/><path fill="#7BC6FF" d="M134.734 0C32.794 0 67.367 116.708 67.367 116.708L134.734 0Z"/></svg>
            </v-btn>&nbsp and &nbsp
            <v-btn icon disabled><svg xmlns="http://www.w3.org/2000/svg" width="1.70em" height="1.70em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="#b20000" fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15C-7.534 4.736 3.562-3.248 8 1.314z"/></svg>
            </v-btn> 
          </strong>
        </v-card-text>
      </v-row>
    </v-card>
    </v-container>
    </v-footer>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  
</style>
