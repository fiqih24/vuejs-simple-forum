<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs12>
                  <v-card>    
                    <v-card-title>
                    <h3 class="headline mb-0">                       
                        {{ qs.title }}                   
                    </h3>       
                     <v-spacer></v-spacer>
                    <v-btn color="teal" class="white--text">{{ countReply }} Reply</v-btn>                           
                    </v-card-title>
                    <div class="grey--text" style="margin-left:20px">{{ qs.created_at }}</div>
                    <v-card-text v-html="qs.body">                       
                    </v-card-text>
                   
                    </v-card>
                    
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name:'QuestionRead',
    props:['slug'],
    data(){
        return {
            qs : {},
            countReply:0,
        }
    },
    created(){
        this.showCountReply();
        this.axios.get('http://udemy-course.asd/api/question/'+this.slug)
        .then (res => this.qs = res.data.data)
        .catch (err => console.log(err.response.data))
    },
    methods:{
        showCountReply(){
            this.axios.get('http://udemy-course.asd/api/question/'+this.slug+'/reply')
        .then (res => this.countReply = res.data.data.length)
        .catch (err => console.log(err.response.data))
        }
    }
}
</script>

<style>

</style>
