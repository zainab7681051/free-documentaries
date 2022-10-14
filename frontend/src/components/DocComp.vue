<template>
  <div class="text-center">
    <v-dialog
    v-model="dialog"
    width="500"
    persistent
    >
    
    <template v-slot:activator="{ on, attrs }">
          <v-container>
            <template>
              <div
              align="center">
                <v-dialog
                v-model="dialog2"
                width="600"
                height="300">
                  <template v-slot:activator="{on, attrs}">                  
                    <v-row>
                	<v-col cols="12">
                      <v-card 
                      v-for="doc in docs"
                      class="mt-2 mb-2"
                      :key="doc.id"
                      block
                      width="70%"
                      style="border:3px solid #ab92b3;">
                      <v-row>              
                            <v-col cols="12" md="6" lg="4">
                            <v-img
                            class="mt-4"
                            width="100%"
                            aspect-ratio="2"
                            contain
                            :src ="doc.imageAdress"
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

                              <v-col cols="12" md="6" lg="4">
                                <div
                                class="ml-2 mt-10 mb-2 text-md lg:text-xl">
                                  {{doc.title}}
                                </div>
                              </v-col>

                              <v-col cols="12" md="6" lg="4">
                                <div
                                class="ml-2 mt-5 mb-2 px-2
                                ">
                                <v-btn class="mt-2 mb-2 ml-2 mr-2
                                px-0.5 py-0.5 text-sm
                                sm:px-2 sm:py-1 md:px-3 md:py-1.5
                                lg:px-4 lg:py-2
                                md:text-md"
                                @click="expandDesc.bool=!expandDesc.bool;
                                expandDesc.id=doc.id">Description</v-btn >
                                <v-expand-transition>
                                  <v-card
                                    v-show="expandDesc.bool&&expandDesc.id==doc.id"
                                    height="100%"
                                    width="100%"
                                    class="mx-auto"
                                    style="border:1.5px solid #ab92b3;">
                                  <v-card-text
                                  class="text-body-2 text-sm-body-1
                                    text-md-h5 text-left text-lg-h3 text--seconday">
                                    <p class="font-weight-bold">Description:</p> {{doc.description}}
                                  </v-card-text>
                                  </v-card>
                                </v-expand-transition>
                                </div>
                              </v-col>
                              
                              <v-col cols="12" md="6" lg="4">
                                <div> Tags: 
                                <v-btn
                                v-for="genre in doc.genres"
                                class="mt-2 mb-2 ml-2 mr-2
                                px-0.5 py-0.5 text-sm
                                sm:px-2 sm:py-1 md:px-3 md:py-1.5
                                lg:px-4 lg:py-2
                                md:text-md" 
                                :key="genre.id"
                                small
                                @click="getByGenres(genre)">
                                {{genre.genre}}
                                </v-btn>
                                </div>
                              </v-col>

                              <v-col cols="12" md="6" lg="4">
                                <v-btn
                                color="primary"
                                class="block mt-2 mr-2 w-full px-1 py-0.5 md:px-5 md:py-2 lg:px-7 lg:py-4 text-800 hover:text-white hover:bg-blue-500"
                                @click="watch(doc.youtubeId,doc.title)"
                                >
                                  Watch
                                </v-btn>

                                <v-btn
                                color="error"
                                class="block mt-2 ml-2 w-full px-1 py-0.5 lg:px-7 lg:py-4 text-800 hover:text-white hover:bg-red-500"
                                :to="{
                                    name: 'download', 
                                    params:{
                                      docId: doc.id+'+'+doc.youtubeId
                                    }
                                  }">
                                  Download
                                  <!-- @click="download=true; dialog2=true" -->
                                </v-btn>
                              </v-col>
                          </v-row>
                        <br>
                      </v-card>
                    </v-col>
	                </v-row>
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
