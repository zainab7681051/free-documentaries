<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="60%"
      persistent
    >
    <template v-slot:activator="{ on, attrs }">
      <v-container v-if="isUserLoggedIn"
      align="center">
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
            <v-col>
              <v-btn 
              block
              class="mt-2 mr-2"
              color="primary"
              @click="clear; addingDoc=true; dialog=true">
              <h4>Add a documnetary</h4>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn 
              block
              class="mt-2 mr-2"
              color="red"
              @click="deletingAll=true; dialog=true">
              <h4>Delete all</h4>
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col
            v-if="isUserLoggedIn"
            v-for="doc in docs"
            :key="doc.id"
            cols="12" sm="12"
            md="6" lg="4" xl="3">
              
              <v-card
              block
              class="mt-2 mb-2"
              width="100%" 
              style="border:3px solid #ab92b3;">
              
                <v-card-title>
                  <v-img
                  class="mt-4"
                  width="100%"
                  aspect-ratio="2"                    
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
                </v-card-title>
                
                <v-card-subtitle>
                  {{doc.title}}
                </v-card-subtitle>
                <v-divider></v-divider>
                  
                  <v-btn color="green"
                  class="mt-2 mb-2"
                  @click="clear; setDoc(doc); editingDoc=true; dialog=true;">
                    edit
                  </v-btn>
                  
                  <v-btn color="red" 
                  class="ml-2 mt-2 mb-2"
                  @click="deleteOne(doc.id)">
                    delete
                  </v-btn>
              </v-card>
            </v-col>
          </v-row>
      </v-container>
    </template>

      <v-card v-if="addingDoc">
        <v-card-title>
          New Documentary
        </v-card-title>

        <v-card-text>
          <form 
          class="ml-2 mr-2"
          >
            <v-text-field
              v-model="title"
              label="title"
              required
              :error-messages="titleErrors"
              @input="$v.title.$touch()"
              @blur="$v.title.$touch()">
            </v-text-field>
            <v-text-field
              v-model="description"
              label="description"
              required
              :error-messages="descriptionErrors"
              @input="$v.description.$touch()"
              @blur="$v.description.$touch()">
            </v-text-field>
            <v-text-field
              v-model="imageAdress"
              label="image adress"
              required
              :error-messages="imageAdressErrors"
              @input="$v.imageAdress.$touch()"
              @blur="$v.imageAdress.$touch()">
            </v-text-field>
            <v-text-field
              v-model="youtubeId"
              label="youtube id (not the the entire link adress)"
              required
              :error-messages="youtubeIdErrors"
              @input="$v.youtubeId.$touch()"
              @blur="$v.youtubeId.$touch()">
            </v-text-field>

            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Genre
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item) in genres"
                  :key="item.id"
                >
                  <v-list-item-title>
                    <v-btn
                    text
                    @click="addGenre(item)">
                      {{ item.genre }}
                    </v-btn>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </form>

          <div>
            <v-chip
            v-for="(item,index) in chosenGenres"
            :key="index"
            close
            class="mr-2 mt-2"
            @click:close="chosenGenres.splice(index,1)"
            >
              {{item.genre}}
            </v-chip>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>

          <v-btn
            text
            @click="add"
          >
            Add
          </v-btn>

          <v-btn
            text
            @click="clear();
              addingDoc=false;
              dialog = false;"
          >
            Cancel
          </v-btn>

          <v-btn
            text
            @click="clear"
          >
            Clear
          </v-btn>
        </v-card-actions>
      </v-card>


      <v-card v-if="editingDoc">
        <v-card-title>
          Editing Documentary
        </v-card-title>

        <v-card-text>
          <form 
          class="ml-2 mr-2"
          >
            <v-text-field
             v-model="title"
              label="title"
              required
              :error-messages="titleErrors"
              @input="$v.title.$touch()"
              @blur="$v.title.$touch()">
            </v-text-field>
            <v-text-field
              v-model="description"
              label="description"
              required
              :error-messages="descriptionErrors"
              @input="$v.description.$touch()"
              @blur="$v.description.$touch()">
            </v-text-field>
            <v-text-field
              v-model="imageAdress"
              label="image adress"
              required
              :error-messages="imageAdressErrors"
              @input="$v.imageAdress.$touch()"
              @blur="$v.imageAdress.$touch()">
            </v-text-field>
            <v-text-field
              v-model="youtubeId"
              label="youtube id (not the the entire link adress)"
              required
              :error-messages="youtubeIdErrors"
              @input="$v.youtubeId.$touch()"
              @blur="$v.youtubeId.$touch()">
            </v-text-field>

            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Genre
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item) in genres"
                  :key="item.id"
                >
                  <v-list-item-title>
                    <v-btn
                    text
                    @click="addGenre(item)">
                      {{ item.genre }}
                    </v-btn>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </form>

          <div>
            <v-chip
            v-for="(item,index) in chosenGenres"
            :key="index"
            close
            class="mr-2 mt-2"
            @click:close="chosenGenres.splice(index,1)"
            >
              {{item.genre}}
            </v-chip>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>

          <v-btn
            text
            @click="edit"
          >
            edit
          </v-btn>

          <v-btn
            text
            @click="clear();
              editingDoc=false;
              dialog = false;"
          >
            Cancel
          </v-btn>

          <v-btn
            text
            @click="clear"
          >
            Clear
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card v-if="deletingAll">
        <v-card-title>
          Deleting All Documentaries
        </v-card-title>

        <v-card-text>
          <div>Are you sure?</div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>

          <v-btn
            text
            @click="deleteAll"
          >
            Yes
          </v-btn>

          <v-btn
            text
            @click="
              deletingAll=false;
              dialog = false;"
            >
            Cancel
          </v-btn>
          </v-btn>
        </v-card-actions>
      </v-card>
      
      <v-card v-if="loading && fetch">
        <v-card-title>
          Fetching All ...
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

      <v-card v-if="loading && !fetch">
        <v-card-title>
          Deleting All ...
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

          <v-btn v-if="fatalError=='you do not have access to this resource'"
            text
            @click="
              dialog = false; 
              fatalError=''; 
              $router.push('/admin-login')"
          >
            Login
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="../scripts/AdminCompScript.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only-->
<style scoped lang="stylus">
  
</style>