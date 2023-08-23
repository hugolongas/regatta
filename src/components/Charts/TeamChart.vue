<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chart"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'TeamChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Punts',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  mounted(){
    this.load();
  },
  computed:{
    chart(){
        return this.chartData;
    }
  },
  methods: {
    load() {
      this.getTeams();
    },
    getTeams() {
      var that = this;
      this.$http.get("leaderboard/teams").then((response) => {        
        if (response.data) {
          var teamsList = response.data.data;
          window.console.log(teamsList);
          teamsList.map((x) => {
            that.chartData.labels.push(x.name);
            that.chartData.datasets.data.push(x.total_points);
          })          
        } else {
          let error = response;
          this.showError(error);
        }
      });
    },
  },
}
</script>