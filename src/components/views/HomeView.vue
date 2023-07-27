<template>
    <div class="login">
      <h1 class="title">Home</h1>
      
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      email: "",
      password: "",
      error: false,
    }),
    methods: {
      login() {
        console.log(this.email);
        console.log(this.password);
      },
    },
  };
  </script>