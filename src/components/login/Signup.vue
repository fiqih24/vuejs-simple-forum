<template>
      <v-form @submit.prevent="signup">
        <v-container grid-list-xl>   

        <v-flex xs12 sm12>
          <v-text-field
            v-model="form.name"
            label="Name"
            type="text"
            required
          ></v-text-field>
        </v-flex>
        <span class="red--text" v-if="errors.name">{{ errors.name[0] }}</span>
        <v-flex xs12 sm12>
          <v-text-field
            v-model="form.email"
            label="Email"
            type="email"
            required
          ></v-text-field>
        </v-flex>
        <span class="red--text" v-if="errors.email">{{ errors.email[0] }}</span>
        <v-flex xs12 sm12>
          <v-text-field
            v-model="form.password"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-flex>
        <span class="red--text" v-if="errors.password">{{ errors.password[0] }}</span>
         <v-flex xs12 sm12>
          <v-text-field
            v-model="form.password_confirmation"
            label="Confirm Password"
            type="password"
            required
          ></v-text-field>
        </v-flex>
        <span class="red--text" v-if="errors.password">{{ errors.password[0] }}</span>
        <br>
        <v-btn color="yellow" type="submit">Signup</v-btn>
        <router-link to="/login">
            <v-btn color="green" style="margin-left:5px" >Login</v-btn>
        </router-link>

        <v-btn v-on:click="logout">Logout</v-btn>
    </v-container>
      
      
  </v-form>
</template>

<script>

export default {
    data(){
        return{
            form:{
                name:null,
                email:null,
                password:null,
                password_confirmation:null,
            },
            errors:{}
        }
    },
     created(){
        if(user.loggedIn()){
            this.$router.push({name:'forum'});
        }
    },
    methods:{       
        signup(){
                this.axios.post('http://udemy-course.asd/api/auth/signup',this.form)
                // .then(res => user.responseAfterLogin(res)) 
                .then(function (response) {       
                  user.responseAfterSignup(response); 
                  this.$router.push({name:'forum'});            
                })  
                 .catch(error =>  this.errors = error.response.data.errors)   
                // .catch(function (error) {
                //     this.errors = error.response.data.errors ;                   
                // })
        },
        
    }

}
</script>

<style>

</style>
