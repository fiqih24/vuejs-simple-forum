<template>
    <v-toolbar>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Forum LiuFiq</v-toolbar-title>
    <v-spacer></v-spacer>
    <app-notification></app-notification>
    <div class="hidden-sm-and-down" v-for="item in items">
        <router-link v-bind:to="item.to" v-if="item.show==true">
            <v-btn text>{{ item.title }}</v-btn>
        </router-link>
    </div>
    </v-toolbar>
</template>

<script>
import AppNotification from './AppNotification';
export default {
 name:'Toolbar',
 components:{
     AppNotification
 },
 data(){
     return{
         items:[
             {title : 'Forum', to:'/forum', show:true},
             {title : 'Ask Question', to:'/ask', show: user.loggedIn()},
             {title : 'Login', to:'/login', show: !user.loggedIn()},                          
             {title : 'Category', to:'/category', show: user.loggedIn()},
             {title : 'Logout', to:'/logout', show: user.loggedIn()},
         ]
     }
 },
 created(){
     EventBus.$on('logout',function(){
         user.logout();
     });
 }
}
</script>

<style>

</style>
