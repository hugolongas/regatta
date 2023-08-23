<template>
  <div class="dashboard">
    <h1 class="title">Dashboard</h1>
    <TeamChart />
    {{teams}}
    {{leaderboard}}
  </div>
</template>
  
<script>

import TeamChart from '@/components/Charts/TeamChart'
export default {
  name: "HomeView",
  components: { TeamChart },
  data() {
    return {
      teamsList: [],
      leaderboardList: [],
    };
  },
  mounted() {
    this.load();
  },
  computed: {
    leaderboard() {
      return this.leaderboardList;
    },
  },
  methods: {
    load() {
      this.getTeams();
      this.getLeaderBoard();
    },
    getTeams() {
      var that = this;
      this.$http.get("leaderboard/teams").then((response) => {
        window.console.log(response);
        if (response.data) {
          that.teamsList = response.data;
        } else {
          let error = response;
          this.showError(error);
        }
      });
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