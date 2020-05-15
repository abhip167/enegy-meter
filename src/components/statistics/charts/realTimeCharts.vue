<template>
  <div class="charts">
    <div class="row">
      <div class="flex md12 xs12">
        <va-card class="chart-widget" justify="center">
          <template slot="header">
            <va-icon name="fa fa-2x fa-bolt mr-3" color="danger" />
            <p class="mt-0 mb-0 display-1 text-center">Power Statistics</p>
            <button @click="fillData()">Randomize</button>
          </template>
          <LineChart :chartData="datacollection" :defaults="defaults"></LineChart>
        </va-card>
      </div>
    </div>
  </div>
</template>
<script>
import LineChart from '@/data/charts/realTimeChartData.js'
export default {
  components: {
    LineChart,
  },
  data () {
    return {
      datacollection: {
        labels: [20, 60, 90],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [10, 20, 30],
          }, {
            label: 'Data One',
            backgroundColor: 'blue',
            data: [100, 120],
          },
        ],
      },
      updatedData1: [100, 200, 300],
      updatedData2: [10, 20, 30],
      updatedLables: [20, 60, 90],
      defaults: {
        global: {
          defaultFontColor: 'red',
        },
      },
    }
  },
  mounted () {
    this.interval = setInterval(() => this.fillData(), 3000)
  },
  methods: {
    fillData () {
      this.updatedData1.push(Math.floor(Math.random() * (50 - 5 + 1)) + 5)
      this.updatedLables.push(Math.floor(Math.random() * (50 - 5 + 1)) + 5)
      this.updatedData2.push(Math.floor(Math.random() * (50 - 5 + 1)) + 5)
      this.datacollection = {
        labels: this.updatedLables,
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: this.updatedData1,
          }, {
            label: 'Data One',
            backgroundColor: 'blue',
            data: this.updatedData2,
          },
        ],
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
  },
  //   created () {
  //     this.interval = setInterval(() => this.fillData(), 4000);
  //   },
}

</script>
