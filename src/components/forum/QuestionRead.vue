<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs12>
                  <v-card>    
                    <v-card-title>
                    <h3 class="headline mb-0">                       
                       {{ qs.user }} {{ qs.title }}                   
                    </h3>       
                     <v-spacer></v-spacer>
                    <v-btn color="teal" class="white--text">{{ qs.reply_count }} Reply</v-btn> 
                   
                    </v-card-title>
                    <div class="grey--text" style="margin-left:20px">{{ qs.created_at }}</div>
                    <v-card-text v-html="body">                       
                    </v-card-text>
                    <v-card-actions v-if="ifMyPost()">
                        <v-btn  icon small>
                            <v-icon @click="edit" color="orange">mdi-pencil</v-icon>
                        </v-btn>
                         <v-btn  @click="destroy" color="red" icon small> 
                             <v-icon>mdi-delete</v-icon> 
                     </v-btn>                         
                    </v-card-actions>
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
    computed:{
        body(){
            return marked.parse(this.qs.body);
        }
    },
    created(){
        
        this.axios.get('http://udemy-course.asd/api/question/'+this.slug)
        .then (res => this.qs = res.data.data)
        .catch (err => console.log(err.response.data))
    },
    methods:{
        ifMyPost(){
            return this.qs.user_id == user.id() ?  true : false ;
        },
        destroy(){
            if(confirm('apakah anda yakin igin menghapus')){
            this.axios.delete('http://udemy-course.asd/api/question/'+this.slug)
            .then (res => this.$router.push({name:'forum'}))
            .catch (err => console.log(err.response.data))
            }else{
                alert('Failed to delete data');
            }
        },
        edit(){
            EventBus.$emit('editQuestion');
        }
    }
}
</script>

<style>

</style>
