<template>
    <div>
        <v-btn text icon>
            <v-icon :color="warna" @click="likeIt()">fa fa-heart</v-icon>
        </v-btn>
        <span>{{ total_like }}</span>
    </div>
</template>

<script>
export default {
    props:['replyId','data'],
    data(){
        return{
            warna:'grey',
            total_like:this.data,
        }
    },
    computed:{
        countLike(){
            return this.warna=='grey' ? this.total_like += 1 : this.total_like -= 1
        },
    },
    methods:{
        likeIt(){            
            if(user.loggedIn()){
                this.countLike
               if( this.warna=='grey'){
                   this.warna = 'red';
                    this.axios.post('http://localhost:8000/api/like/'+this.replyId)
                    .then(res => alert('like it'))
                    .catch(err => alert('you may need login to do this action'))
               }else{
                   this.warna ='grey';
                   this.axios.delete('http://localhost:8000/api/unlike/'+this.replyId)
                    .then(res => alert('unlike it'))
                    .catch(err => alert('you may need login to do this action'))
               } 
            }else{
                alert('you need login to do this action')
            }
        },
        showReply(){
            this.axios.get('http://localhost:8000/api/check_like/'+this.replyId)
            .then(res => res.data==1 ? this.warna='red' : this.warna='grey' )
            .catch(err => console.log(err.response))
        }
    },
    created(){
        this.showReply();
    }
}
</script>

<style>

</style>
