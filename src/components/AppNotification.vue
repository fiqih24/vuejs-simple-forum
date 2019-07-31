<template>
<div class="text-xs-center">
    <v-menu offset-y>    
        <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
           <v-icon color="orange">
            fa fa-bell
        </v-icon>5
        </v-btn>
      </template>
    <v-list>
        <v-list-item >
            <v-list-item-content v-for="item in unread" :key="item.id">
                <v-list-item-title>
                  {{ item.data.question }}
                </v-list-item-title>
                
            </v-list-item-content>
        </v-list-item>
    </v-list>
    </v-menu>
</div>
    
</template>

<script>
export default {
    data(){
        return {
        read:{},
        unread:{},
        unreadCount:0,
        }
    },
    created(){
        // if(user.loggedIn()){
        //     this.getNotifications()
        // }
    },
    methods:{
        getNotifications(){
            this.axios.post('http://localhost:8000/api/notifications')
            .then (res=>{
                this.read = res.data.read
                this.unread = res.data.unread
                this.unreadCount = res.data.unread.length
                console.log(res.data)
            })
            .catch(err => console.log(err.response.data))
        }
    }
}
</script>

<style>

</style>
