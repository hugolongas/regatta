<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chart" :width="500" :height="300"/>
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