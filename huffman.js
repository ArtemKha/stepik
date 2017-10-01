const data = 'beep boop beer!'
const data1 = 'abasabsasascc'
const data2 = 'ass'

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

function toLeaves(obj) {
  const sortable = []
  for (let ltr in obj) {
    sortable.push([ltr, obj[ltr]])
  }

  const leaves = sortable.sort(sortByFrequency).map(leaf => {
    return Leaf(leaf[1], counter(), leaf[0])
  })
  
  return leaves
}

function Node(value, link, left, right) {
  return { type: 'Node', value: value, link: link, leaves: [left, right]}
}

function Leaf(value, link, char) {
  return { type: 'Leaf', value: value, link: link, char: char}
}

const counter = (function () {
  let count = -1;
  return function () { return count += 1; }
})();

function toTree(tree) {
  const n = tree.length - 1
  const temp = [...tree]

  for (let k = n + 1; k <= (2 * n); k++) {
    const one = extractMIN(temp)[0]
    const two = extractMIN(temp)[0]
    const value = one.value + two.value;
    const node = Node(value, counter(), one.link, two.link)
    temp.push(node)
    tree[k] = node
  }

  return tree
}

function extractMIN(arr) {
  const min = arr.sort(sortByFrequency)

  return min.splice(0, 1)
}

function sortByFrequency(a, b) {
  return a.value - b.value
}

function toHuffman(tree) {
  const root = tree[tree.length - 1]
  
  const code = {}

  function toCode(node, acc) {
    
    if (node.type !== 'Leaf') {
      const left = node.leaves[0]
      const right = node.leaves[1]
      toCode(tree[left], acc += 0)
      toCode(tree[right], acc += 1)
    } 

    console.log(node)
    if (node.char) {
      code[node.char] = acc
      console.log(acc)
      acc = acc. slice(0, -1)
      return 
    }
  }
  
  toCode(root, '')
  return code
}


const leaves = toLeaves(count(data))
const tree = toTree(leaves)

console.log(toHuffman(tree))
// console.log(toTree(leaves))
// console.log(toTree(toLeaves(count(data))))

// for (let k = n + 1; k <= 2 * n - 1; k++) {

// }