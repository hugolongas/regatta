<template>
  <div class="dashboard">
    <h1 class="title">Classificació</h1>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card>
            <v-card-title>
              Puntació per equips
            </v-card-title>
            <v-card-text>
              <TeamChart />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card>
            <v-card-title>
              Puntació per usuaris
            </v-card-title>
            <v-card-text>
              <v-data-table :headers="headers" :items="leaderboard" :items-per-page="10" class="elevation-1">
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
  
<script>

import TeamChart from '@/components/Charts/TeamChart'
export default {
  name: "DashboardView",
  components: { TeamChart },
  data() {
    return {
      leaderboardList: [],
      headers: [
        { text: 'Nom', value: 'name' },
        { text: 'Equip', value: 'team.name' },
        { text: 'Punts', value: 'points' }
      ],
    };
  },
  mounted() {
    this.load();
  },
  computed: {
    leaderboard() {
      return this.leaderboardList.data;
    },
  },
  methods: {
    load() {
      this.getLeaderBoard();
    },
    getLeaderBoard() {
      var that = this;
      this.$http.get("leaderboard").then((response) => {
        window.console.log(response);
        if (response.data) {
          that.leaderboardList = response.data;
        } else {
          let error = response;
          this.showError(error);
        }
      });
    },
  },
};
</script>