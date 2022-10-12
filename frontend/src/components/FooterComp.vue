<template>
  <v-card>
    <v-footer
      absolute
      padless
      app
    >
    <v-layout>
      <v-card
        flat
        tile
        width="100%"
        class="lighten-1 text-center""

      ><v-flex xs12 sm12>
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
      </v-flex>
        <v-divider></v-divider>

        <v-card-text>
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-layout>
    </v-footer>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      icons:[
          'mdi-home',
          'mdi-email-outline',
          'mdi-alert-box',
        'mdi-alpha-w-circle-outline'
        
      ]
    }),
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  
</style>
