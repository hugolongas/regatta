<template>
  <div>
    <v-toolbar :class="teamColor">
      <v-toolbar-title >Regatta{{user.team.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="user-info">
        <span class="user-item">Mariners: {{ ship.current_crew }}/{{ ship.max_crew }}</span>        
        <span class="user-item">Diners: {{ user.money }}</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn small @click="logout">
        Deslogar-se
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>
    <div class="container">
      <router-view />
    </div>
    <v-bottom-navigation fixed>
      <v-btn :to="{ name: 'athlete' }">
        <span>Mariners</span>
        <v-icon>mdi-account-group</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'ship' }">
        <span>Vaixell</span>
        <v-icon>mdi-ship-wheel</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'races' }">
        <span>Curses</span>
        <v-icon>mdi-vector-polyline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script>
export default {
  name: "BaseView",
  data() {
    return {
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then((response) => {
        if (response == "success") {
          this.$router.push({ name: "home" });
        } else {
          this.error = response;
        }
      });
    },
     async syncData() {
      await this.$store.dispatch("syncAthletes");
      await this.$store.dispatch("syncShip");
      await this.$store.dispatch("syncUpgrades");
    }
  },
  computed:{
    user(){
    return this.$store.getters.user;
    },
    ship(){
      return this.$store.getters.ship;
    },
    teamColor(){
      var tColor = this.user.team.id;
      switch(tColor){
        case 1:
          return "orange";
          case 2:
          return "red";
          case 3:
          return "blue";
          case 4:
          return "yellow";
          case 5:
          return "white";
      }
      
      return "white";
    }
  },
  mounted() {
    this.syncData();
  },
}
</script>
<style>
.user-item{
  display: inline-block;
  margin-right: 5px;
  }
</style>