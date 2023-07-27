<template>
  <div>
    <nav>
        <router-link to="/ship">Ship</router-link>
    </nav>
    <div>
      <router-view/>
    </div>
  </div>
  </template>
  <script>
  export default {
    name:"BaseView"
  
  }
  </script>
  <style>
  </style>