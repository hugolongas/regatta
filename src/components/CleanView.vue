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
  </div>
  </template>
  <script>
  export default {
    name:"CeanView"
  
  }
  </script>
  <style>
  </style>