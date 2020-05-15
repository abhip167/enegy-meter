const generateTime = () => {
  return Array(10)
    .fill(0)
    .map((e, i) => new Date().getHours() - i)
}

const generateValue = () => {
  return random(1, 20)
}

const generateYLabels = () => {
  const flip = !!Math.floor(Math.random() * 2)
  return flip ? ['KVA', 'KW'] : ['KW', 'KVA']
}

const generateArray = length => {
  return Array.from(Array(length), generateValue)
}

console.log(generateArray(10))
