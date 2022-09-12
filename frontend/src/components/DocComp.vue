<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
    <template v-slot:activator="{ on, attrs }">
      <v-layout column>
        <v-layout>
          <v-container>
          <!---------------------------->
          <!-----------DOCS------------->
          <!---------------------------->
            <v-flex xs12>
              <v-card 
              v-for="doc in docs"
              class="mt-2 mb-2"
              :key="doc.id"
              block
              style="border:3px solid #ab92b3;">
                <v-row>
                  <v-col>
                    <v-layout 
                    column>
                      <v-flex xs8>
                        <div
                        class="ml-2 mt-10 mb-2">
                          {{doc.title}}
                        </div>
                      </v-flex>

                      <v-flex>
                        <v-btn
                        color="primary"
                        class="mt-2"
                        @click="watch"
                        >
                          Watch
                        </v-btn>

                        <v-btn
                        color="error"
                        class="ml-4 mt-2"
                        >
                          Download
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </v-col>
                  <v-col>
                    <v-img
                    aspect-ratio="2"
                    contain
                    :src="doc.imageAdress"
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
                    </v-img>
                  </v-col>
                </v-row>
              <br>
            </v-card>
          </v-flex>          
        <!---------------------------->
        <!---------------------------->
        <!---------------------------->
        </v-container>
        </v-layout>
      </v-layout>
      </template>
      <!-- ERROR BOX -->
      <v-card>
        <v-card-title>
          ERROR!
        </v-card-title>

        <v-card-text>
          {{fatalError}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
      <!---------------->
    </v-dialog>
  </div>
</template>

<script src="../scripts/DocCompScript.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
 
</style>
