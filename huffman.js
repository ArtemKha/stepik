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
  let pat = ''

  function assign(node, pat) {
    if (node.type === 'Leaf') {
      code[node.char] = pat
    } else {
      assign(tree[node.leaves[0]], pat+'0')
      assign(tree[node.leaves[1]], pat+'1')
    }
  }
  
  assign(root, pat)
  return code
}

function toCode(table, string) {
  let code = ''
  string.split('').forEach( char => {
    code += table[char]
  })
  return code
}

let params = `aaa`

const leaves = toLeaves(count(params))
const char = leaves.length
const huffman = toHuffman(toTree(leaves))
const code = toCode(huffman, params)

if (params.length < 2) {
  console.log(1, 1)
  console.log(params.slice(0, 1) + ': ' + 0)
  console.log(0)
} else if ( char < 2 ) {
  console.log(1, params.length)
  console.log(params.slice(0, 1) + ': ' + 0)
  console.log(params.split('').map( item => {
    return '0'
  }).join(''))
} else {
  console.log(char, code.length)
  for (let char in huffman) console.log(char + ': ' + huffman[char])
  console.log(code)
}