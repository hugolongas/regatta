<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>
<script>
export default {
  name:"App",  
  async created(){
    await this.syncData();
  },
  mounted() {
    var user = this.$store.getters.user;
    if(user==null) this.$router.push({ name: "home" });    
  },
  methods:{
    async syncData(){
      await this.$store.dispatch("syncTeams");
    }
  }

}
</script>
<style>
</style>