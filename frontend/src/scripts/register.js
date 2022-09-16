import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'
import authentication from '../service/authentication.js'
export default {
  name: 'register',
  mixins: [validationMixin],
  data: () => ({
      name: '',
      email: '',
      password:'',
      checkbox: false,
      fatalError:'',
      dialog:false
    }),

  validations: {
    name: { 
      required, 
      maxLength: maxLength(15) 
    },
    email: { 
      required, 
      email 
    },
    password:{
      required,
      maxLength: maxLength(15),
      minLength: minLength(5),
    }
  },

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 15 characters long')
        !this.$v.name.required && errors.push('Name is required')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        //FOR LATER==>!this.$v.email.email && errors.push('password must have one or more letters, small and cap')
        !this.$v.password.minLength && errors.push('password must be at least 5 characters long')
        !this.$v.password.maxLength && errors.push('password must be at most 15 characters long')
        !this.$v.password.required && errors.push('Password is required')
        return errors
      },
    },

    methods: {
      async submit () {
        if(!this.$v.name.$invalid&&
          !this.$v.email.$invalid&&
          !this.$v.password.$invalid)
          {
            try {
              const response=await
              authentication.register({
                  name:this.name,
                  email:this.email,
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
