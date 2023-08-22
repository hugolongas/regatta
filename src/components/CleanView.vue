<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>REGATA JUGUESQUERA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="login" small>
        logar-se
        <v-icon left>
      mdi-login
      </v-icon>
      </v-btn>
      <v-btn @click="register"  small>
        Enregistrar-se
        <v-icon
        left
        dark
      >
        mdi-register
      </v-icon>
      </v-btn>
    </v-toolbar>    
    <div>
      <router-view />
    </div>    
    <LoginDialog ref="lgnd" />
    <RegisterDialog ref="rgtd" />
  </div>
  </template>
  <script>
  import LoginDialog from "@/components/dialogs/LoginDialog";
  import RegisterDialog from "@/components/dialogs/RegisterDialog";
  export default {    
  components: { LoginDialog,RegisterDialog },
    name:"CeanView",
    methods:{
      login(){
        this.$refs.lgnd.show();
      },
      register(){
        console.log("a");
        this.$refs.rgtd.show();
      }
    }
  
  }
  </script>
  <style>
  </style>