<template>
    <div>
       <QuestionEdit v-if="editQuestion" :slug=slug />
       <QuestionRead :slug=slug />
       <QuestionReply :replie="replies" :slug="slug" />
       
    </div>
</template>

<script>
import QuestionRead from './QuestionRead';
import QuestionReply from './QuestionReply';
import QuestionEdit from './QuestionEdit';

export default {
    // props:['slug'],
    components:{
        QuestionRead,QuestionReply,QuestionEdit,
    },
    data(){
        return{
            editQuestion:false,
            slug : this.$route.params.slug,
            replies:{}
        }
    },
    created(){                        
        EventBus.$on('editQuestion',() =>{
            this.editQuestion = true
        }),
        EventBus.$on('cancelEdit',() =>{
            this.editQuestion = false
        }),
        this.showReplies();
    },
    methods:{
        showReplies(){
                const url = 'http://localhost:8000/api/question/'+this.slug+'/reply';
                this.axios.get(url)
                .then(res => this.replies = res.data.data)
                .catch(err => console.log(err.response.data))
        },
    }
}
</script>

<style>

</style>
