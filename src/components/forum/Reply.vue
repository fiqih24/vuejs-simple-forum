<template>
    <div class="mb-2">
         <v-flex xs12 >
                <v-card class="mb-2">
                <v-card-title>
                    {{ dataReply.user }} 
                    <Like class="text-center" style="position:absolute;right:10px"
                    :replyId="dataReply.id"  :data="dataReply.jumlah_like" 
                   />
                </v-card-title>
                <v-divider></v-divider>
                <ReplyFormEdit v-if="isEditing" :question_id="dataReply.question_id" 
                 :id="dataReply.id" :slug="slug" :body="dataReply.reply" :index="index" />
                <v-card-text v-else >
                    {{ dataReply.reply }}
                </v-card-text>
                
                <v-card-actions >                    
                    <v-btn icon small>
                        <v-icon color="orange" @click="editing()">mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon small>
                        <v-icon color="red" @click="delReply()">mdi-delete</v-icon>
                    </v-btn>
                <v-btn text>{{ dataReply.created_at }}</v-btn>
                
                </v-card-actions>                
            </v-card>
            
        </v-flex>
    </div>
</template>

<script>
import ReplyFormEdit from './ReplyFormEdit';
import Like from './likes/Like';
export default {
    props:['data','index','slug'],
    components:{
        ReplyFormEdit,Like
    },
    data(){
        return{
            myReply:user.own(this.data.user_id),
            isEditing:false,
            dataReplys: null,
            
        }
    },
    computed:{
        dataReply(){
            this.dataReplys = this.data
            return this.dataReplys
        },
        btnEdit(){
            return this.myReply==true && this.isEditing==false ? true : false;
        }
    },
    created(){
        EventBus.$on('cancelEdit',()=>{
            this.isEditing = false
        })            
    },
    methods:{
         delReply(){
                EventBus.$emit('deleteReply',this.index)
         
        },
        editing(){
            this.isEditing = true
        }
    },
    
    

}
</script>

<style>

</style>
