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
                    LOGIN
                    </v-card-title>
                    
                    <form 
                    class="ml-2 mr-2"
                    >
                      <v-text-field
                        v-model="name"
                        :error-messages="nameErrors"
                        label="Name or E-mail"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()">
                      </v-text-field>
                      <v-text-field
                        v-model="password"
                        :error-messages="passwordErrors"
                        label="Password"
                        required
                        type="password"
                        @input="$v.password.$touch()"
                        @blur="$v.password.$touch()"
                      ></v-text-field><!-- 
                      <v-checkbox
                        v-model="checkbox"
                        label="Stay Logged in?"
                        @change="$v.checkbox.$touch()"
                        @blur="$v.checkbox.$touch()"
                      ></v-checkbox> -->

                      <v-btn
                      to="/register"
                      text
                      plain
                      color="#fd6767"
                      class="mb-2">
                        Not registered? SignUp!
                      </v-btn>
                      <br>
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

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'
import authentication from '../service/authentication.js'
export default {
  name: 'login',
  mixins: [validationMixin],
  data: () => ({
      name: '',
      password:'',
      checkbox: false,
      fatalError:'',
      dialog:false
    }),

  validations: {
    name: { 
      required, 
    },
    password:{
      required,
    }
  },

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Name Or E-mail is required.')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Password is required')
        return errors
      }
    },

    methods: {
      async submit () {
        if(!this.$v.name.$invalid&&
          !this.$v.password.$invalid)
          {
            try {
              const response=await
              authentication.login({
                  name:this.name,
                  password:this.password
                })
            
            this.$store.dispatch(
              'setToken',
              response
              .data
              .token
              )
            
            this.$store.dispatch(
              'setUser',
              response
              .data
              .user
              )
            
            this.$router.push({
              name:'list'
            })
          }catch(error) {
            this.fatalError=error.response.data.error;
            this.dialog=true
            
          }
      }else{
        this.fatalError='no empty or invalid forms'
        this.dialog=true
        }
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.password = ''
        this.checkbox = false
        this.fatalError=''
      },
    },
  }

</script>
