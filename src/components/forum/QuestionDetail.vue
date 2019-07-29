<template>
    <div>
       <QuestionRead :slug=slug />
       <QuestionReply :slug=slug />
    </div>
</template>

<script>
import QuestionRead from './QuestionRead';
import QuestionReply from './QuestionReply';

export default {
    // props:['slug'],
    components:{
        QuestionRead,QuestionReply
    },
    data(){
        return{
            slug : this.$route.params.slug
        }
    },
    created(){                        
        
    }
}
</script>

<style>

</style>
