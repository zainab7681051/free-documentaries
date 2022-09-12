<template>
  <v-row>
    <v-row>
      <!-- <v-container> -->
        <v-col xs12>
          <v-card
            class="mx-auto"
            max-width="400"
            outlined
            tile
            elevation="3"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://www.tuhocanhvan.com/wp-content/uploads/2015/04/to-do.jpg"
            >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            
              <v-card-title style="color: black">Welcome to To-Do's</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              Here you can write down what to-do!
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>you can start right away or...</div>

              <div>you can login and save your list of to-doings for later!</div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="blue"
                to="/doc"
              >
                Start
              </v-btn>

              <v-btn
                color="blue"
                to="/login"
              >
                Login
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-col><!-- 
      </v-container> -->
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: 'welcom-comp',
  data:()=>({
  }),
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  
</style>
