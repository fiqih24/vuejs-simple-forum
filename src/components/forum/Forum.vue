<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs8>
              <Question v-for="question in questions" 
                :key="question.slug"
                :data=question
              class="mt-2"></Question>
            </v-flex>
            <v-flex xs4>
                <app-sidebar></app-sidebar>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Question from './Question';
import AppSidebar from './AppSidebar';
export default {
components: {
    Question,AppSidebar
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
},
    
    

}
</script>

<style>

</style>
