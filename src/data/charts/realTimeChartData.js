import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options', 'defaults'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options, this.defaults)
    // this.$data._chart.defaults.global.defaultFontSize = 100;
    // this.$data._chart.defaults.global.defaultFontStyle = "bold";
  },
}
