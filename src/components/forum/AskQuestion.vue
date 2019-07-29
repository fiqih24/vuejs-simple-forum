<template>
    <v-container fluid grid-list-md>
     <v-form @submit.prevent="create()">    <v-layout row wrap>
           
            <v-flex md12>
                <v-text-field
                    v-model="form.title"                                
                    label="Title"
                    required
                ></v-text-field>
            </v-flex>
            <v-flex md12 d-flex>
              
                    <v-select                   
                    :items="categories"
                    item-value="id"
                    item-text="name"
                    v-model="form.category_id"
                    label="Category"
                    autocomplete=""></v-select>                
            </v-flex>
            <v-flex md12>
                <vue-simplemde v-model="form.body" ref="markdownEditor" />
            </v-flex>
            <v-btn color="green" type="submit">POST</v-btn>
            
        </v-layout></v-form>
    </v-container>
</template>

<script>
 import VueSimplemde from 'vue-simplemde'
export default {
    components: {
      VueSimplemde
    },
    data(){
        return{
            form:{
                title:null,
                category_id:null,
                body:null,
            },
         categories:{}   
        }
    },
    created(){       
        this.showCategory();
        
    },
    methods:{
        create(){
             
             this.axios.post('http://127.0.0.1:8000/api/question/',this.form)
            .then(res => console.log(res.data) )
            .catch(err => console.log(err.response.data) )
        },
        showCategory(){
            this.axios.get('http://udemy-course.asd/api/category')
            .then(res => this.categories = res.data.data )
        }
    }

}
</script>

<style>
  @import '~simplemde/dist/simplemde.min.css';
</style>
