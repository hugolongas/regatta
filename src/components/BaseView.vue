<template>
  <div>
    <v-system-bar :color="teamColor" fixed height="40px">
      <v-toolbar-title>Regatta{{ user.team.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="user-info">
        <span class="user-item">Mariners: {{ ship.current_crew }}/{{ ship.max_crew }}</span>
        <span class="user-item">Diners: {{ user.money }}</span>
      </div>
    </v-system-bar>
    <div class="container">
      <router-view />
    </div>

    <v-bottom-navigation fixed>
      <v-spacer></v-spacer>
      <v-btn :to="{ name: 'dashboard' }">
        <span>Classificació</span>
        <v-icon>mdi-chart-bar</v-icon>
      </v-btn>
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
      <v-spacer></v-spacer>
      <v-btn @click="logout">
        <span>Deslogar-se</span>
        <v-icon>mdi-logout</v-icon>
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
          sessionStorage.clear();
          this.$router.push({ name: "home" });
        } else {
          this.error = response;
        }
      });
    },
    async syncData() {
      await this.$store.dispatch("syncShip");
      await this.$store.dispatch("syncUpgrades");
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    ship() {
      return this.$store.getters.ship;
    },
    teamColor() {
      if(this.user==null) return "#000000";
      var tColor = this.user.team.id - 1;
      if (tColor < 0) return 'white'
      var color = ["#fc8803", "#fc0303", "#4169e1", "#ffff00", "#f5054f"];
      return color[tColor]
    },
    regattaTitle(){
      if(this.user==null) return "Regatta";
      var title = "Regata colla: "+ this.user.team.name;
      return title;
    }
  },
  async created() {
    await this.syncData();
  },
}
</script>
<style>
.container {
  padding-top: 40px;
}

.user-item {
  display: inline-block;
  margin-right: 5px;
  background-color: white;
  border-radius: 25px;
  padding: 2px 5px;
}
</style>