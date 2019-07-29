<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs8>
              <Question v-for="question in questions" 
                :key="question.slug"
                :data=question
              style="margin-bottom:5px"></Question>
            </v-flex>
            sidebar
            
        </v-layout>
    </v-container>
</template>

<script>
import Question from './Question';

export default {
components: {
    Question
},
data(){
    return{
     questions:{}
    }
},
created(){
    this.axios.get('http://udemy-course.asd/api/question')
    .then(res => this.questions = res.data.data )
    .catch(error => alert('periksa koneksi anda'))
}
}
</script>

<style>

</style>
