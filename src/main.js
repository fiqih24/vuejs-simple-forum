import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

// import VueSocketIO from 'vue-socket.io'
 
// Vue.use(new VueSocketIO({
//     debug: true,
//     connection: 'http://127.0.0.1:8000',
//     options: { path: "/api/websocket" } ,
//     vuex: {
//         store,
//         actionPrefix: 'SOCKET_',
//         mutationPrefix: 'SOCKET_'
//     }
// }))
import VueEcho from 'vue-echo-laravel';
  
Vue.use(VueEcho, {
    broadcaster: 'localhost:8080',
    host: window.location.hostname + ':6001',
});

import User from './helpers/User';
window.user = User;

import marked from 'marked'
window.marked = marked;

window.EventBus = new Vue();
Vue.use(VueAxios, axios);



axios.defaults.headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer '+user.token(),
}
Vue.config.productionTip = false;

new Vue({  
 
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
