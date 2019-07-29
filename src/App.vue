<template>
  <v-app>
    <div>
      <Toolbar/>
      </div>
   

    <v-content>
      <transition  name="bounce">
        <router-view></router-view>
      </transition>
      <!-- <AppHome></AppHome> -->
      <!-- <Login/> -->
    
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';

import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
  Toolbar,Footer
  },
  data: () => ({

  }),
  computed:{
    
    
  },
  methods:{
   
  },
  watch:{

  }
  
};
</script>
