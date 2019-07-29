import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
    
import User from './helpers/User';
window.user = User;

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
