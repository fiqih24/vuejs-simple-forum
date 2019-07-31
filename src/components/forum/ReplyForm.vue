<template>
    <v-container fluid grid-list-md>
        <h1>NEW REPLY</h1>
        <v-form @submit.prevent="submit()">
        <v-layout row >
            
            <v-flex md12>
                <vue-simplemde v-model="form.body" ref="markdownEditor" />
            </v-flex>
            <v-btn color="green" type="submit">
                POST
            </v-btn>
        </v-layout>
        </v-form>
    </v-container>
</template>

<script>
 import VueSimplemde from 'vue-simplemde'
export default {
 props:['slug'],
 components: {
      VueSimplemde
    },
 data(){
     return{
         form:{
            body:''
        },
     }
 },
 methods:{
     submit(){         
             this.postReply();         
     },
     postReply(){
         this.axios.post('http://127.0.0.1:8000/api/question/'+this.slug+'/reply/',this.form)
         .then( res => {
             this.form.body = '';
             EventBus.$emit('newReply',res.data)
            //  console.log(res.data)
         }).
         catch(res => console.log(res.response.data))
     },
     updateReply(){

     }
 },
}
</script>

<style>
  @import '~simplemde/dist/simplemde.min.css';
</style>
