<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name:"App",  
  mounted() {
    var user = this.$store.getters.user;
    if(user==null) this.$router.push({ name: "home" });
  }

}
</script>
<style>
</style>