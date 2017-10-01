function sum(n) {
  return n/2*(2 + n - 1)
}

function ordinal(input) {
  return Math.floor((-1+Math.sqrt(1+8*input))/2)
}

function summands(input) {
  if (input !== 1 && input !== 2) {
    const quantity = ordinal(input)
    const tempSum = sum(quantity - 1)
    let whileSum = tempSum
    let i = 1
    
    while (whileSum !== input) {
      whileSum = tempSum
      whileSum += i
      i++
    }

    const result = []
    let j = 1

    while ( result.length !== quantity - 1 ) {
      result.push(j)
      j++
    }
    result.push(i - 1)

    console.log(quantity)
    console.log(...result)
  } else {
    console.log(1)
    console.log(input)
  }
}

summands(500)
