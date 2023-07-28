<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn :to="{name: 'login'}"  class="pink">
      <v-icon>Login</v-icon>
      </v-btn>
      <v-btn :to="{name: 'register'}" class="pink">
      <v-icon>Registrar</v-icon>
      </v-btn>
    </v-toolbar>   
    <div>
      <router-view/>
    </div>
    <v-bottom-navigation>
    <v-btn :to="{name: 'login'}"  class="pink">
      <span>Nearby</span>
      <v-icon>mdi-map-marker</v-icon>      
      </v-btn>

    <v-btn :to="{name: 'ship'}"  class="pink">
      <v-icon>mdi-ship-wheel</v-icon>
      </v-btn>

    <v-btn value="nearby">
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </div>
  </template>
  <script>
  export default {
    name:"BaseView",
    data(){
      return {

      }
    },
    methods:{
    logout() {
      this.$store.dispatch("logout").then((response) => {
        window.console.log(response);
        if (response == "success") {
          this.$router.push({ name: "home" });
        } else {
          this.error = response;
        }
      });
    },
    },
    mounted() {
      this.user = this.$store.getters.user;
      }  
  }
  </script>
  <style>
  </style>