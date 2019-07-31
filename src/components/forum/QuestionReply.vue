<template>
    <div>
    <v-container fluid grid-list-md>
    <v-layout wrap row>
    <v-container>
     <reply v-for="(reply,index) in repliesComputed" :key="index" :index="index" :slug="slug" :data="reply"></reply>
    </v-container>
     <ReplyForm :slug="slug" />
    </v-layout>
    </v-container>
    
    </div>
</template>

<script>
import Reply from './Reply';
import ReplyForm from './ReplyForm';
export default {
    props:['replie','slug'],
    components:{
        Reply,ReplyForm
    },
    data(){
        return{           
           repliess:null,
        }
    },
    computed:{
        repliesComputed(){
            this.repliess = this.replie
            return this.repliess
        }
    },
    methods:{
        listen(){
            EventBus.$on('newReply',(res) =>{
               this.replie.push(res)
            })
            EventBus.$on('deleteReply',(index) =>{                          
               this.axios.delete('http://127.0.0.1:8000/api/question/'+this.slug+'/reply/'+this.replie[index].id)
                .then(res => alert('berhasil dihapus'))                           
                .catch(err => console.log(err.response.data))
              this.replie.splice(index,1);
            })
            EventBus.$on('updateReply',(reply)=>{
                this.replie[reply.index] = reply.data;       
                this.$forceUpdate();         
             })
        },
       
    },    
    created(){
        this.listen()
    }
}
</script>

<style>

</style>
