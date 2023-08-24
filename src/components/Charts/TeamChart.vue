<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" :width="500" :height="300"/>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale)

export default {
  name: 'TeamChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['Bisky', "Can T'Implora", 'Concos', 'Skando', "Sporting l'olla"],
        datasets: [{
          backgroundColor: ["#ed1e1e", "#2269e5", "#fce302", "#04f759", "#fc9700"],
          data: [0, 0, 0, 0, 0]
        }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  mounted() {
    this.load();
  },
  computed: {
    chart() {
      window.console.log(this.chartData);
      return this.chartData;
    }
  },
  methods: {
    load() {
      this.getTeams();
    },
    getTeams() {
      this.$http.get("leaderboard/teams").then((response) => {
        if (response.data) {
          var teamsList = response.data.data;
          window.console.log(teamsList);
          this.chartData = {
            labels: teamsList.map(item => item.name),
            datasets: [{
              backgroundColor: teamsList.map(item=>this.getColor(item.id-1)),
              data: teamsList.map(item => item.total_points)
            }
            ]
          }
        } else {
          let error = response;
          this.showError(error);
        }
      });
    },
    getColor(id){
      var color = ["#fc8803", "#fc0303", "#4169e1", "#ffff00", "#f5054f"];
      return color[id]
    }
  },
}
</script>