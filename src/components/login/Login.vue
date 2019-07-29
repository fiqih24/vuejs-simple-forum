<template>
  <v-form @submit.prevent="login">
    <v-container grid-list-xl>   
        <v-flex xs12 sm12>
          <v-text-field
            v-model="form.email"
            label="Email"
            type="email"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm12>
          <v-text-field
            v-model="form.password"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-flex>

        <v-btn color="green" type="submit">Login</v-btn>
        <router-link to="/signup">
         <v-btn color="yellow" >Signup</v-btn>
        </router-link>
    </v-container>
  </v-form>
</template>

<script> 
 export default {
    data () {
      return {
       form :{
           email:null,
           password:null,
       }
      }
    },
    created(){
        if(user.loggedIn()){
            this.$router.push({name:'forum'});
        }
    },
    methods:{
        login(){
            user.login(this.form);            
        }
    },
  }
</script>

<style>

</style>
