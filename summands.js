let data = 1658

let num = parseInt(data)

function findMax(num) {
  if (num === 1) return [1, [1], 1]
  if (num === 2) return [1, [2], 2]
  
  let sum = 0
  let i = 0
  let numbers = []

  while (sum <= num) {
    i++
    numbers.push(i)
    sum += i
    console.log(sum)    
  }

  sum = sum - (i * 2 - 1)
  i--
  numbers = numbers.slice(0, -2)
  
  console.log(sum)
  return [i, numbers, sum]
}

const [i, numbers, sum] = findMax(num)
const last = findLast(i, sum, num)
const result = numbers.concat(last)

function findLast(i, sum, num) {
  if (sum === num) return i
  let temp;

  while (temp !== num) {
    temp = sum
    i++
    temp += i
    console.log(sum, i)
  }

  return i
}

console.log(i)
console.log(...result)