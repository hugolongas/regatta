<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>
<script>
export default {
  name:"App",  
  mounted() {
    var user = this.$store.getters.user;
    if(user==null) this.$router.push({ name: "home" });
    this.syncData();
  },
  methods:{
    async syncData(){
      await this.$store.dispatch("syncTeams");
      await this.$store.dispatch("syncDashboardTeams");
      await this.$store.dispatch("syncDashboardUsers");
    }
  }

}
</script>
<style>
</style>