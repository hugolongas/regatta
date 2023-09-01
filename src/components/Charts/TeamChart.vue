<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chart"  class="chartTeam" />
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
      chartOptions: {
        responsive: false
      }
    }
  },
  computed: {
    chart() {
      var teamsList = this.$store.getters.getDashboardTeams;
      return teamsList;
    }
  },
}
</script>
<style>
.chartTeam{
  width:100%;
  height: auto;
}
</style>