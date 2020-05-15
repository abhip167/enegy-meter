import { hex2rgb } from '../../services/vuestic-ui'
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const KVA = [30, 25, 20, 15, 20, 25, 10, 15, 25, 30, 35, 35]

const KW = KVA.map(i => Math.floor(i * 0.8))
function variation (parameter) {
  if (parameter == 'color') {
    months.map(function (month, i) {
      if (KVA[i] >= 45) {
        return 'red'
      }
      // if (month.includes("July") || month.includes("June")) {
      //   return "rgb(76, 159, 14, 0.7)";
      // }
      return 'blue'
    })
  } else {
    months.map(function (month, i) {
      if (KVA[i] >= 45) {
        return '15'
      }
      // if (month.includes("July") || month.includes("June")) {
      //   return "rgb(76, 159, 14, 0.7)";
      // }
      return '7'
    })
  }
}

export const getLineChartData2018 = themes => ({
  labels: months,
  datasets: [
    {
      label: 'KW',
      backgroundColor: hex2rgb(themes.primary, 0.6).css,
      borderColor: hex2rgb(themes.secondary, 0.6).css,
      data: KW,
      pointBackgroundColor: 'green',
      pointStyle: 'rectangle',
      pointRadius: '7',
      pointHitRadius: '15',
    },
    {
      label: 'KVA',
      backgroundColor: hex2rgb(themes.info, 0.6).css,
      borderColor: '#000080',
      data: KVA,
      pointBackgroundColor: months.map(function (month, i) {
        if (KVA[i] >= 45) {
          return 'red'
        }
        // if (month.includes("July") || month.includes("June")) {
        //   return "rgb(76, 159, 14, 0.7)";
        // }
        return 'blue'
      }),
      pointStyle: 'rectangle',
      pointRadius: months.map(function (month, i) {
        if (KVA[i] >= 45) {
          return '10'
        }
        // if (month.includes("July") || month.includes("June")) {
        //   return "rgb(76, 159, 14, 0.7)";
        // }
        return '7'
      }),
      pointHitRadius: '7',
    },
  ],
})
