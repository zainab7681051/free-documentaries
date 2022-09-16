<script src="../scripts/AdminCompScript.js">
</script>

<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
    <template v-slot:activator="{ on, attrs }"><!-- 
      <v-container> -->
        
        <v-row>
          <v-row>
            <v-col>
              <div 
              block
              class="mt-4"
              style="background-color:#ab92b3;">
              <h2>Admin Dashboard</h2>
              </div>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col
            v-if="!isUserLoggedIn"
            v-for="n in 24"
            :key="n"
            cols="4">

              <v-card 
              height="400"
              width ="600">
                
              </v-card>
            </v-col>

            <v-col
            v-if="!isUserLoggedIn"
            v-for="doc in docs"
            :key="doc.id"
            cols="4">
              <v-card 
              height="400">
                <v-divider/>
                <v-card-action>
                  <v-btn>
                    edit
                  </v-btn>
                </v-card-action>
              </v-card>
            </v-col>
          </v-row>
        </v-row><!-- 
      </v-container> -->
    </template>

      <v-card v-if="fatalError">
        <v-card-title>
          ERROR!
        </v-card-title>

        <v-card-text>
          {{fatalError}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn v-if="!isUserLoggedIn"
            text
            @click="dialog = false; fatalError=''; $router.push('/admin-login')"
          >
            Login
          </v-btn>

          <v-btn
            text
            @click="dialog = false; fatalError=''"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  
</style>