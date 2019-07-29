import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Login from './components/login/Login.vue';
import Logout from './components/login/Logout.vue';
import AppHome from './components/AppHome.vue';
import Signup from './components/login/Signup.vue';
import Forum from './components/forum/Forum.vue';
import QuestionDetail from './components/forum/QuestionDetail.vue';
import AskQuestion from './components/forum/AskQuestion.vue';

const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/home', component: AppHome },
    { path: '/ask', component: AskQuestion, name:'askquestion' },
    { path: '/signup', component: Signup },
    { path: '/forum', component: Forum, name:'forum' },
    { path: '/forum/:slug', component: QuestionDetail, name:'question-detail' },
  ]

  const router = new VueRouter({
    routes ,// short for `routes: routes`
    hashbang:false,
    mode:'history'
  })

  export default router