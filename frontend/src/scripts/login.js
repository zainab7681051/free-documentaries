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
            
            this.$router.push('/admin-dashboard')
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
