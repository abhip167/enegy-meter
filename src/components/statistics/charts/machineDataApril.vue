<template>
  <div>
    <div class="row">
      <div class="flex md6 xs12 lg6" v-for="(machine,id) in machineData" :key="id">
        <va-card>
          <template slot="header">
            <va-icon name="fa fa-2x fa-plug mr-3" color="danger" />
            <p class="mt-0 mb-0 display-1 text-center">{{ machine.name }}</p>
          </template>
          <div class="flex xs12 md12">
            <va-card>
              <div class="row row-separated">
                <div class="flex xs3">
                  <p
                    class="display-2 mb-1 no-wrap text--center"
                    :style="{color: machineDataColors.KVA}"
                  >{{ machine.KVA }}</p>
                  <p class="text--center display-5 mb-1">KVA</p>
                </div>
                <div class="flex xs3">
                  <p
                    class="display-2 mb-1 no-wrap text--center"
                    :style="{color: machineDataColors.KW}"
                  >{{ machine.KW }}</p>
                  <p class="text--center display-5 no-wrap mb-1">KW</p>
                </div>
                <div class="flex xs3">
                  <p
                    class="display-2 mb-1 no-wrap text--center"
                    :style="{color: machineDataColors.hours}"
                  >{{ machine.hours }}</p>
                  <p class="text--center display-5 no-wrap mb-1">Hrs.</p>
                </div>
                <div
                  class="flex xs3"
                  :style="{ backgroundColor: machineDataColors.hours, borderRadius: '5px',  }"
                >
                  <p
                    class="display-2 mb-1 no-wrap text--center"
                    :style="{color: machineDataColors.Kwh}"
                  >{{ machine.hours * machine.KW }}</p>
                  <p class="text--center display-5 mb-1">Kwh</p>
                </div>
              </div>
            </va-card>
          </div>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex md6 xs12">
        <va-card class="chart-widget">
          <template slot="header">
            <va-icon name="fa fa-2x fa-bolt mr-3" color="info" />
            <p class="mt-0 mb-0 display-3 text-center">Current Demand [KVA]</p>
          </template>
          <va-chart :data="pieChartData" type="pie" />
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card class="chart-widget">
          <template slot="header">
            <va-icon name="fa fa-2x fa-bolt mr-3" color="info" />
            <p class="mt-0 mb-0 display-3 text-center">Current Demand [KW]</p>
          </template>
          <va-chart :data="donutChartData" type="donut" />
        </va-card>
      </div>
    </div>
    <div class="row">
      <div class="flex md6 xs12 lg6">
        <va-card id="pad-0">
          <template slot="header">
            <va-icon name="fa fa-2x fa-plug mr-3" color="danger" />
            <p class="mt-0 mb-0 display-3 text-center">Full Load Demand [ KVA ]</p>
          </template>
          <div class="flex xs12 md12">
            <va-card>
              <div class="row row-separated">
                <div class="flex xs12 sm2">
                  <p
                    class="display-3 mb-1 no-wrap text--center"
                    :style="{color: machineDataColors.KVA}"
                  >10</p>
                  <p class="text--center display-5 mb-1">M 1</p>
                </div>
                <div class="flex xs12 sm2">
                  <p
                    class="display-3 mb-1 no-wrap text--center"
                    :style="{color: machineDataColors.KW}"
                  >12.5</p>
                  <p class="text--center display-5 no-wrap mb-1">M 2</p>
                </div>
                <div class="flex xs12 sm2">
                  <p
                    class="display-3 mb-1 no-wrap text--center"
                    :style="{color: machineDataColors.hours}"
                  >31.5</p>
                  <p class="text--center display-5 mb-1">M 3</p>
                </div>
                <div class="flex xs12 sm2">
                  <p
                    class="display-3 mb-1 no-wrap text--center"
                    :style="{color: machineDataColors.Kwh}"
                  >10</p>
                  <p class="text--center display-5 mb-1">M 4</p>
                </div>
                <div
                  class="flex xs12 sm4"
                  :style="{ backgroundColor: machineDataColors.hours, borderRadius: '5px',  }"
                >
                  <p
                    class="display-3 mb-1 no-wrap text--center"
                    :style="{color: machineDataColors.Kwh}"
                  >64</p>
                  <p class="text--center display-5 mb-1">Total</p>
                </div>
              </div>
            </va-card>
          </div>
        </va-card>
      </div>
      <div class="flex md6 xs12 lg6">
        <va-card id="pad-0">
          <template slot="header">
            <va-icon name="fa fa-2x fa-plug mr-3" color="danger" />
            <p class="mt-0 mb-0 display-3 text-center">Full Load Demand [ KW ]</p>
          </template>
          <div class="flex xs12 md12">
            <va-card>
              <div class="row row-separated">
                <div class="flex xs12 sm2">
                  <p
                    class="display-3 mb-1 no-wrap text--center"
                    :style="{color: machineDataColors.KVA}"
                  >8</p>
                  <p class="text--center display-5 mb-1">M 1</p>
                </div>
                <div class="flex xs12 sm2">
                  <p
                    class="display-3 mb-1 no-wrap text--center"
                    :style="{color: machineDataColors.KW}"
                  >10</p>
                  <p class="text--center display-5 no-wrap mb-1">M 2</p>
                </div>
                <div class="flex xs12 sm2">
                  <p
                    class="display-3 mb-1 no-wrap text--center"
                    :style="{color: machineDataColors.hours}"
                  >25</p>
                  <p class="text--center display-5 no-wrap mb-1">M 3</p>
                </div>
                <div class="flex xs12 sm2">
                  <p
                    class="display-3 mb-1 no-wrap text--center"
                    :style="{color: machineDataColors.Kwh}"
                  >8</p>
                  <p class="text--center display-5 no-wrap mb-1">M 4</p>
                </div>
                <div
                  class="flex xs12 sm4"
                  :style="{ backgroundColor: machineDataColors.hours, borderRadius: '5px',  }"
                >
                  <p
                    class="display-2 mb-1 no-wrap text--center"
                    :style="{color: machineDataColors.Kwh}"
                  >51</p>
                  <p class="text--center display-5 display-5 mb-1">Total</p>
                </div>
              </div>
            </va-card>
          </div>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pieChartData: {
        labels: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4', 'Unused'],
        datasets: [
          {
            label: 'KVA (sharing)',
            backgroundColor: [
              this.$themes.primary,
              this.$themes.info,
              this.$themes.warning,
              this.$themes.danger,
              'grey',
            ],
            data: [10, 3, 27.5, 5, 0],
          },
        ],
      },
      donutChartData: {
        labels: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4', 'Unused'],
        datasets: [
          {
            label: 'KW (sharing)',
            backgroundColor: [
              this.$themes.primary,
              this.$themes.info,
              this.$themes.warning,
              this.$themes.danger,
              'grey',
            ],
            data: [8, 2.4, 13.75, 4, 0],
          },
        ],
      },
      machineData: [
        {
          name: 'Machine 1',
          KVA: 10,
          KW: 8,
          hours: 30,
        },
        {
          name: 'Machine 2',
          KVA: 3,
          KW: 2.4,
          hours: 60,
        },
        {
          name: 'Machine 3',
          KVA: 27.5,
          KW: 22,
          hours: 200,
        },
        {
          name: 'Machine 4',
          KVA: 5,
          KW: 4,
          hours: 500,
        },
      ],
      machineDataColors: {
        KVA: this.$themes.primary,
        KW: this.$themes.info,
        hours: this.$themes.warning,
        Kwh: this.$themes.danger,
      },

    }
  },
}
</script>


<style lang="scss" scoped>
@include media-breakpoint-down(sm) {
  .display-2 {
    font-size: 1.25rem !important;
  }

  .display-5 {
    font-size: 1rem !important;
  }
}
</style>
