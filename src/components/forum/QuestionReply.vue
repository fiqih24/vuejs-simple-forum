<template>
<div>
    <v-container fluid grid-list-md>
    <v-layout >
     <v-flex xs6 v-for="reply in replies">
        <v-card >
        <v-card-title>{{ reply.user }}</v-card-title>
        <v-card-text>{{ reply.reply }}</v-card-text>
        <v-card-actions>
        <v-btn text>{{ reply.created_at }}</v-btn>
        </v-card-actions>
    </v-card>
  </v-flex>
  </v-layout>
  </v-container>
  </div>
</template>

<script>
export default {
    props:['slug'],
    data(){
        return{
            replies:{}
        }
    },
    created(){
        const url = 'http://udemy-course.asd/api/question/'+this.slug+'/reply';
        this.axios.get(url)
        .then(res => this.replies = res.data.data)
        .catch(err => console.log(err.response.data))
    }
}
</script>

<style>

</style>
