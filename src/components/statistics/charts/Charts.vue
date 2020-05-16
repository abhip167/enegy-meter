<template>
  <div class="charts">
    <div class="row">
      <div class="flex md12 xs12">
        <va-card>
          <div class="row align--center mb-1">
            <div class="flex xs12 sm3 md3">
              <va-icon name="fa fa-2x fa-bolt mr-3" color="danger" />
              <span class="mt-0 mb-0 display-1">Power Statistics</span>
            </div>
            <div class="flex xs12 sm3 md3">
              <div class="d-flex justify--left">
                <va-button-toggle
                  outline
                  v-model="Monthmodel"
                  :options="Monthoptions"
                  color="warning"
                />
              </div>
            </div>
            <div class="flex xs12 sm3 md3">
              <span class="mt-0 mb-0 display-4">[Month: {{ Monthmodel }}, 2020]</span>
            </div>
            <div class="flex xs12 sm3 md3">
              <span class="mt-0 mb-0 display-4">[Time: 23:59:00]</span>
            </div>
          </div>
        </va-card>
      </div>
    </div>

    <machineDataFeb v-show="Monthmodel == 'Feb'" />
    <machineDataApril v-show="Monthmodel == 'April'" />

    <div class="row">
      <div class="flex md12 xs12">
        <va-card class="chart-widget">
          <template slot="header">
            <va-icon name="fa fa-2x fa-bolt mr-3" color="danger" />
            <p class="mt-0 mb-0 display-3 text-center">Hourly Power Data</p>
          </template>
          <va-chart :data="datacollection" :options="lineChartOptions" type="line"></va-chart>
        </va-card>
      </div>
    </div>
    <transition name="fade">
      <div class="row" v-if="model == 2019 && isVisible == true">
        <div class="flex md12 xs12 mb-3">
          <va-notification v-model="isVisible" color="danger" closeable>
            <va-badge color="danger" class="mr-3">Danger</va-badge>
            <span class="display-5">Increase Demand To Save Penalty.</span>
          </va-notification>
        </div>
      </div>
    </transition>
    <div class="row">
      <div class="flex md12 xs12">
        <va-card class="chart-widget">
          <template slot="header">
            <!-- <va-icon name="fa fa-2x fa-bolt mr-3" color="danger" />
            <p class="mt-0 mb-0 mr-5 display-3 text-center">Yearly Power Data [ {{ model }} ]</p>
            <va-button-toggle outline v-model="model" :options="options" color="info" />-->
            <div class="row align--center mb-1">
              <div class="flex xs12 sm6 md6">
                <va-icon name="fa fa-2x fa-bolt mr-3" color="danger" />
                <span class="mt-0 mb-0 display-1">Yearly Power Data [ {{ model }} ]</span>
              </div>
              <div class="flex xs12 sm6 md6">
                <div class="d-flex justify--left">
                  <va-button-toggle outline v-model="model" :options="options" color="info" />
                </div>
              </div>
            </div>
          </template>

          <va-chart
            :data="lineChartData2019"
            v-show="model == 2019"
            :options="lineChartOptions"
            type="line"
          />
          <va-chart
            :data="lineChartData2018"
            v-show="model == 2018"
            :options="lineChartOptions"
            type="line"
          />
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import { hex2rgb } from '@/services/vuestic-ui'

import { getLineChartData2019 } from '../../../data/charts/LineChartData2019'
import { getLineChartData2018 } from '../../../data/charts/LineChartData2018'
// import { getBubbleChartData } from '../../../data/charts/BubbleChartData'
// import { getPieChartData } from '../../../data/charts/PieChartData'
// import { getDonutChartData } from '../../../data/charts/DonutChartData'
// import { getVerticalBarChartData } from '../../../data/charts/VerticalBarChartData'
// import { getHorizontalBarChartData } from '../../../data/charts/HorizontalBarChartData'
// import LineChart from '@/data/charts/realTimeChartData.js'
import machineDataFeb from './machineDataFeb'
import machineDataApril from './machineDataApril'

export default {
  name: 'charts',
  components: {
    // LineChart,
    machineDataFeb,
    machineDataApril,
  },
  data () {
    return {
      // bubbleChartData: getBubbleChartData(this.$themes),
      lineChartData2019: getLineChartData2019(this.$themes),
      lineChartData2018: getLineChartData2018(this.$themes),
      // verticalBarChartData: getVerticalBarChartData(this.$themes),
      // horizontalBarChartData: getHorizontalBarChartData(this.$themes),
      lineChartOptions: {
        legend: {
          labels: {
            // This more specific font property overrides the global property
            defaultfontSize: 50,
          },
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,

            },
          }],
        },
      },
      hourCounter: new Date().getHours() + 2,
      datacollection: {
        labels: [new Date().getHours(), new Date().getHours() + 1, new Date().getHours() + 2],
        datasets: [
          {
            label: 'KW',
            data: [40, 55 * 0.8, 49 * 0.8],
            backgroundColor: hex2rgb(this.$themes.info, 0.6).css,
            borderColor: hex2rgb(this.$themes.secondary, 0.6).css,
            pointBackgroundColor: 'blue',
            pointStyle: 'rectangle',
            pointRadius: '7',
            pointHitRadius: '15',
          },
          {
            label: 'KVA',
            data: [50, 55, 49],
            backgroundColor: hex2rgb(this.$themes.primary, 0.6).css,
            borderColor: hex2rgb(this.$themes.secondary, 0.6).css,
            pointBackgroundColor: 'green ',
            pointStyle: 'rectangle',
            pointRadius: '7',
            pointHitRadius: '15',
          },
        ],
      },
      updatedData1: [40, 55 * 0.8, 49 * 0.8],
      updatedData2: [50, 55, 49],
      updatedLables: [new Date().getHours(), new Date().getHours() + 1, new Date().getHours() + 2],
      options: [
        { label: '2018', value: 2018 },
        { label: '2019', value: 2019 },
      ],
      model: 2019,
      Monthoptions: [
        { label: 'April 2020', value: 'April' },
        { label: 'Feb 2020', value: 'Feb' },
      ],
      Monthmodel: 'April',
      isVisible: true,
    }
  },
  methods: {
    fillData () {
      if (this.updatedData1.length && this.updatedData2.length === 15) {
        this.updatedData1 = []
        this.updatedData2 = []
        this.updatedLables = []
        this.hourCounter = new Date().getHours()
      }
      const randomKVA = Math.floor(Math.random() * (50 - 5 + 1)) + 5
      this.updatedData1.push(randomKVA)
      this.updatedLables.push(this.hourCounter + 1)
      this.hourCounter = this.hourCounter + 1
      this.updatedData2.push(Math.floor(randomKVA * 0.8))
      this.datacollection = {
        labels: this.updatedLables,
        datasets: [
          {
            label: 'KW',
            data: this.updatedData2,
            backgroundColor: hex2rgb(this.$themes.info, 0.6).css,
            borderColor: hex2rgb(this.$themes.info, 0.6).css,
            pointBackgroundColor: 'blue',
            pointStyle: 'rectangle',
            pointRadius: '7',
            pointHitRadius: '15',
          },
          {
            label: 'KVA',
            data: this.updatedData1,
            backgroundColor: hex2rgb(this.$themes.primary, 0.6).css,
            borderColor: '#026c45',
            pointBackgroundColor: 'green',
            pointStyle: 'rectangle',
            pointRadius: '7',
            pointHitRadius: '15',
          },
        ],
      }
    },
  },
  mounted () {
    this.interval = setInterval(() => this.fillData(), 3000)
  },
}
</script>

<style lang="scss" >
.chart-widget {
  .va-card__body {
    height: 550px;
  }
}

#pad-0 {
  padding: 0 1.05rem 1.05rem;
}

@include media-breakpoint-down(sm) {
  // .display-4 {
  //   font-size: 5px !important;
  // }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s;
  max-height: 230px;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
