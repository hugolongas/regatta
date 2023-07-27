<template>
  <div>
    <nav>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </nav>
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