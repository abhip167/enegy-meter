let generatedData = false
export const getPieChartData = (themes, month) => {
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
          label: 'KVA (sharing)',
          backgroundColor: [
            themes.primary,
            themes.info,
            themes.warning,
            themes.danger,
            'grey',
          ],
          data: [5, 3, 12, 5, 15],
        },
      ],
    }
  }

  return generatedData
}
