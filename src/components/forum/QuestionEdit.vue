<template>
    <v-container fluid grid-list-md>
     <v-form @submit.prevent="update()">    <v-layout row wrap>
           
            <v-flex md12>
                <v-text-field
                    v-model="form.title"                                
                    label="Title"
                    required
                ></v-text-field>
            </v-flex>
            <v-flex md12>
                <vue-simplemde v-model="form.body" ref="markdownEditor" />
            </v-flex>
            <v-btn color="green" type="submit">Simpan</v-btn>
            <v-btn color="yellow" @click="cancel"> Batalkan</v-btn>
            
        </v-layout></v-form>
    </v-container>
</template>

<script>
 import VueSimplemde from 'vue-simplemde'
export default {
    props:['slug'],
    components: {
      VueSimplemde
    },
    data(){
        return{
            form:{
                title:null,
                category:null,
                body:null,
            },
         categories:{}   
        }
    },
    created(){       
        // user.isLogin();
       this.showDetail();
    },
    methods:{        
        update(){             
             this.axios.put('http://127.0.0.1:8000/api/question/'+this.slug,this.form)
            .then(function(res){
               location.reload();
            })
            .catch(err => console.log(err.response.data) )
        },
        showDetail(){
             this.axios.get('http://127.0.0.1:8000/api/question/'+this.slug)
            .then(res => this.form = res.data.data)
            .catch(err => console.log(err.response.data.data))
        },
        cancel(){
            EventBus.$emit('cancelEdit')
        }
        
    }

}
</script>

<style>
  @import '~simplemde/dist/simplemde.min.css';
</style>
