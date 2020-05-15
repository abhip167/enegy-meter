import { hex2rgb } from '../../services/vuestic-ui'

const generateValue = () => {
  return random(550, 600)
}

const generateYLabels = () => {
  const flip = !!Math.floor(Math.random() * 2)
  return flip ? ['KW', 'KVA'] : ['KVA', 'KW']
}

const generateArray = length => {
  return Array.from(Array(length), generateValue)
}

const generateTime = () => {
  return Array(10)
    .fill(0)
    .map((e, i) => new Date().getHours() - i)
}

const getSize = () => {
  const minSize = 12
  return Math.max(minSize, new Date().getMonth())
}

function random (min, max) {
  return min + Math.random() * (max - min)
}

let generatedData = false
let firstMonthIndex = 0

export const getLineChartData = (themes, firstMonth) => {
  let KVA = []

  const size = getSize()
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
  const yLabels = generateYLabels()

  if (generatedData) {
    generatedData.datasets[0].backgroundColor = hex2rgb(
      themes.primary,
      0.6,
    ).css
    generatedData.datasets[1].backgroundColor = hex2rgb(themes.info, 0.6).css
    if (firstMonth && firstMonthIndex !== firstMonth) {
      generatedData.labels.shift()
      generatedData.datasets.forEach(dataset => {
        dataset.data.shift()
      })
      firstMonthIndex = firstMonth
    }
  } else {
    if (firstMonth == 2019) {
      console.log(firstMonth)
      KVA = [30, 25, 20, 45.5, 45, 45, 45, 50, 25, 50, 55, 55]
    } else {
      KVA = [30, 25, 20, 15, 20, 25, 10, 15, 25, 30, 35, 35]
    }
    const KW = KVA.map(i => Math.floor(i * 0.8))
    generatedData = {
      labels: months,
      datasets: [
        {
          label: yLabels[0],
          backgroundColor: hex2rgb(themes.primary, 0.6).css,
          borderColor: hex2rgb(themes.secondary, 0.6).css,
          data: KW,
          pointBackgroundColor: months.map(function (month, i) {
            if (KVA[i] >= 45) {
              return 'red'
            }
            // if (month.includes("July") || month.includes("June")) {
            //   return "rgb(76, 159, 14, 0.7)";
            // }
            return 'rgb(199, 199, 199, 0.7)'
          }),
          pointStyle: 'rectangle',
          pointRadius: '7',
          pointHitRadius: '15',
        },
        {
          label: yLabels[1],
          backgroundColor: hex2rgb(themes.info, 0.6).css,
          borderColor: '#000080',
          data: KVA,
          pointBackgroundColor: 'blue',
          pointStyle: 'rectangle',
          pointRadius: '7',
          pointHitRadius: '15',
        },
      ],
    }
  }

  return generatedData
}
