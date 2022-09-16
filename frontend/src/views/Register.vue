<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
    <template v-slot:activator="{ on, attrs }">
      <v-app>
        <v-main>
          <v-layout column>
            <v-layout>
              <v-container>
                <v-flex>
                  <v-card>
                    <v-card-title 
                    style="background-color:#ab92b3;">
                    REGISTER
                    </v-card-title>
                    
                    <form 
                    class="ml-2 mr-2"
                    >
                      <v-text-field
                        v-model="name"
                        :error-messages="nameErrors"
                        :counter="15"
                        label="Name"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()">
                      </v-text-field>
                      <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        label="E-mail"
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                      ></v-text-field>
                      <v-text-field
                        v-model="password"
                        :error-messages="passwordErrors"
                        label="Password"
                        required
                        type="password"
                        :counter="15"
                        @input="$v.password.$touch()"
                        @blur="$v.password.$touch()"
                      ></v-text-field>
                      <v-checkbox
                        v-model="checkbox"
                        label="Stay Logged in?"
                        @click="checkbox=true">
                        </v-checkbox>
                      <v-btn
                        class="mr-4 ml-4 mb-2"
                        @click="submit"
                      >
                        submit
                      </v-btn>
                      <v-btn 
                      class="mb-2"
                      @click="clear">
                        clear
                      </v-btn>
                    </form>
                  </v-card>
                </v-flex>
              </v-container>
            </v-layout>
          </v-layout>
      </v-main>
    </v-app>
  </template>

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
    </v-dialog>
  </div>
</template>

<script src="../scripts/register.js">
</script>
