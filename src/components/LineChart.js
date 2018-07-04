import { Line, mixins } from 'vue-chartjs'

export default {
  extends: Line,
  name: 'line-chart',
  mixins: [mixins.reactiveProp],
  props: [
    'chartData',
    'options'
  ],
  mounted () {
    console.log('* Mounted LineChart!')
    const min = Math.min(...this.chartData.datasets[0].data)
    const max = Math.max(...this.chartData.datasets[0].data)
    this.renderChart(this.chartData, Object.assign(this.options, {
      scales: {
        yAxes: [{
          display: true,
          ticks: {
            min: min - 100,
            max: max + 100,
            beginAtZero: false
          }
        }]
      },
      animation: {
        duration: 0
      },
      responsiveAnimationDuration: 0,
      responsive: true,
      maintainAspectRatio: false
    }))
  }
}
