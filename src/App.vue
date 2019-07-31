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
  data() {
    return {
      isConnected: false,
      socketMessage: ''
    }
  },
  channel: 'private:chat',
  mounted(){
      this.channel.listen('BlogPostEdited', (payload) => {
              console.log('As admin I get notified of edits', payload);
          });
},
  sockets: {
    connect() {
      // Fired when the socket connects.
      // this.isConnected = true;
      console.log('tes conek');
    },

    disconnect() {
      this.isConnected = false;
      console.log('tes disconek');
    },
    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel(data) {
      this.socketMessage = data
    }
  },
  methods: {
    pingServer() {
      // Send the "pingServer" event to the server.
      this.$socket.emit('pingServer', 'PING!')
    }
  }
  
};
</script>
