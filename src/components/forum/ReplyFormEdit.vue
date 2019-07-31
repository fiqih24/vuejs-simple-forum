<template>
    <v-container fluid grid-list-md>
        <h1>Edit Reply</h1>
        <v-form @submit.prevent="updateReply()">
        <v-layout row >            
            <v-flex md12>
                <vue-simplemde v-model="form.body" ref="markdownEditor" />
            </v-flex>
            <v-btn color="green" type="submit">
                UPDATE
            </v-btn>
            <v-btn color="light" @click="cancelEditing()">
                cancel
            </v-btn>
        </v-layout>
        </v-form>
    </v-container>
</template>

<script>
 import VueSimplemde from 'vue-simplemde'
export default {
 props:['id','slug','body','question_id','index'],
 components: {
      VueSimplemde
    },
 data(){
     return{
         form:{
            body:this.body,
            question_id:this.question_id
        },
        parameter:{
            index:this.index,
            data:null
        }
     }
 },
 methods:{
   
     updateReply(){
         this.axios.patch('http://127.0.0.1:8000/api/question/'+this.slug+'/reply/'+this.id,this.form)
         .then( res => {
             this.parameter.data = res.data;             
             EventBus.$emit('updateReply',this.parameter)
             this.cancelEditing();
            //  console.log(res.data)
         }).
         catch(res => console.log(res.response.data))
     },
     cancelEditing(){
         EventBus.$emit('cancelEdit')
     }
 }
}
</script>

<style>
  @import '~simplemde/dist/simplemde.min.css';
</style>
