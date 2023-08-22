<template>
    <div class="validate">
      <h1 class="title">Validar</h1>
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      
    }),
    mounted(){
        let token = this.$route.query.token;
        if(token!="")
            this.$http.post("/verifyOptin?token="+token).then((response) => {
        window.console.log(response);
        if (response == "success") {
          this.$router.push({ name: "home" });
        } else {
          this.error = response;
        }
      });
    },
    computed:{
    },
    methods: {
  }
}
  </script>