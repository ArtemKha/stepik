// const data = 'abasabsasascc'
const data = 'beep boop beer!'

function count(string) {
  const str = string.split('')
  const frequency = {}

  str.forEach( ltr => {
    if (ltr in frequency) {
      frequency[ltr] += 1
    } else {
      frequency[ltr] = 1
    }
  })
  
  return frequency
}

function sort(obj) {
  const sortable = []
  for (let ltr in obj) {
    sortable.push([ltr, obj[ltr]])
  }
  
  return sortable.sort(sortByFrequency)
}

function Node(value, link, left, right) {
  return { type: 'Node', value: value, link: link, leaves: [left, right]}
}

function Leaf(value, link, char) {
  return { type: 'Leaf', value: value, link: link, leaf: char}
}

const counter = (function () {
  let count = -1;
  return function () { return count += 1; }
})();

function toHuffman(array) {
  const n = array.length
  const tree = []

  while (array.length !== 1) {
    const nodeFrequency = array[0][1] + array[1][1]
    tree.push(array.splice(0, 2, [0, nodeFrequency]))
    // console.log(array)
  }
  
  tree.push(array.splice(0, 2, [0, array[0][1]]))
  
  return tree
}

function toHuffman2(array) {
  const n = array.length - 1
  const tree = array.map(leaf => {
    return Leaf(leaf[1], counter(), leaf[0])
  })
  const temp = [...tree]

  for (let k = n + 1; k <= (2 * n); k++) {
    const one = extractMIN(temp)
    const two = extractMIN(temp)
    console.log(one, two.value)
    const value = one.value + two.value;
    const node = Node(value, counter(), one, two)
    temp.push(node)
    tree[k] = node
  }

  // return tree
}

function toHuffman3(array) {
  const n = array.length - 1
  // const tree = [...array]
  const tree = []

  for (let k = n + 1; k <= (2 * n); k++) {
    const one = extractMIN(array)[0]
    const two = extractMIN(array)[0]
    tree.push(one)
    tree.push(two)
    tree.push([0, one[1] + two[1]])
    array.push([0, one[1] + two[1]])
  }
  return tree
}

function extractMIN(arr) {
  const min = arr.sort(sortByFrequency)

  return min.splice(0, 1)
}

function sortByFrequency(a, b) {
  console.log(a.value)
  return a.value - b.value
}

const sorted = sort(count(data))
// console.log(sorted)
// console.log(toHuffman2(sorted))
console.log(toHuffman2(sorted))

// for (let k = n + 1; k <= 2 * n - 1; k++) {

// }