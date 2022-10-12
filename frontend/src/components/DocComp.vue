<template>
  <div class="text-center">
    <v-dialog
    v-model="dialog"
    width="500"
    persistent
    >
    <template v-slot:activator="{ on, attrs }">
      <v-layout column>
        <v-layout>
          <v-container>
            <template>
              <div
              align="center">
                <v-dialog
                v-model="dialog2"
                width="600"
                height="300">
                  <template v-slot:activator="{on, attrs}">                  
                    <v-flex xs12 sm12>
                      <v-card 
                      v-for="doc in docs"
                      class="mt-2 mb-2"
                      :key="doc.id"
                      block
                      width="75%"
                      style="border:3px solid #ab92b3;">
                        <!-- <v-row>
                          <v-col> --><!-- 
                            <v-layout 
                            > -->
                            <v-flex xs12 sm12>
                            <v-img
                            class="mt-4"
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
                          </v-flex>

                              <v-flex xs12 sm12 lg4>
                                <div
                                class="ml-2 mt-10 mb-2">
                                  {{doc.title}}
                                </div>
                              </v-flex>
                              
                              <v-flex xs12 sm12 lg4>
                                <div> Tags: 
                                <v-btn
                                v-for="genre in doc.genres"
                                class="mt-2 mb-2 ml-2 mr-2"
                                :key="genre.id"
                                small
                                @click="getByGenres(genre)">
                                {{genre.genre}}
                                </v-btn>
                                </div>
                              </v-flex>

                              <v-flex sm12 xs12 lg4>
                                <v-btn
                                color="primary"
                                class="mt-2"
                                @click="watch(doc.youtubeId,doc.title)"
                                >
                                  Watch
                                </v-btn>

                                <v-btn
                                color="error"
                                class="ml-4 mt-2"
                                :to="{
                                    name: 'download', 
                                    params:{
                                      docId: doc.id+'+'+doc.youtubeId
                                    }
                                  }">
                                  Download
                                  <!-- @click="download=true; dialog2=true" -->
                                </v-btn>
                              </v-flex><!-- 
                            </v-layout> -->
                          <!-- </v-col> -->

                          <!-- </v-col>
                        </v-row> -->
                        <br>
                      </v-card>
                    </v-flex>
                  </template>
                  <!-- youtube player box -->
                  <v-card v-if="player">
                    <iframe 
                    width="600" 
                    height="300" 
                    :src="`https://www.youtube.com/embed/${youtubeId}`" 
                    :title="title" 
                    frameborder="0" 
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture" 
                    allowfullscreen>
                    </iframe>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        @click="player=false; dialog2=false">
                        Cancel
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  <!--------------------------->
                </v-dialog>
              </div>
            </template>
          </v-container>
        </v-layout>
      </v-layout>
      </template>
      <!-- ERROR BOX -->

      <v-card v-if="loading">
        <v-card-title>
          Fetching Documentaries...
        </v-card-title>

        <v-card-text>
          <div>
            <v-progress-circular
            indeterminate
            color="grey lighten-5">
            </v-progress-circular>
          </div>
        </v-card-text>
      </v-card>

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
          <v-btn
            text
            @click="dialog=false;fatalError=''"
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
