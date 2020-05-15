let generatedData = false

export const getDonutChartData = (themes, month) => {
  if (generatedData) {
    generatedData.datasets[0].backgroundColor = [
      themes.danger,
      themes.info,
      themes.primary,
      themes.warning,
    ]
  } else {
    generatedData = {
      labels: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4', 'Unused'],
      datasets: [
        {
          label: 'Demand in KW',
          backgroundColor: [
            themes.primary,
            themes.info,
            themes.warning,
            themes.danger,
            'grey',
          ],
          data: [4, 2.4, 9.6, 4, 12],
        },
      ],
    }
  }

  return generatedData
}
