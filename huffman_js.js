const params = 'accepted'

let codes = {}
function frequency(str) {
  let freqs = {};
  for (let i in str) {

    if (freqs[str[i]] == undefined) {
      freqs[str[i]] = 1;
    }
    else {
      freqs[str[i]] = freqs[str[i]] + 1;
    }
  }

  return freqs;
}
const freqs = frequency(params);

function sortfreq(freqs) {
  let tuples = [];
  for (let char in freqs) {
    tuples.push([freqs[char], char]);
  }
  return tuples.sort();
}

const tuples = sortfreq(freqs);

function buildTree(tuples) {
  while (tuples.length > 1) {
    let leasttwo = [tuples[0][1], tuples[1][1]];
    //console.log(leasttwo);
    let rest = tuples.slice(2, tuples.length);
    //console.log(rest);
    let combfreq = tuples[0][0] + tuples[1][0];
    //console.log(combfreq);
    tuples = rest;
    let end = [combfreq, leasttwo];
    //console.log(end);
    tuples.push(end)
    tuples.sort();
  }
  return tuples[0][1];
}

const tree = buildTree(tuples);
// console.dir(tree)

let code = {};
let pat = '';

//assiging codes to each letter  
function assignCode(node, pat) {
  if (typeof node == typeof "")
    code[node] = pat;
  else {
    assignCode(node[0], pat + '0');
    assignCode(node[1], pat + '1');
  }
}
assignCode(tree, pat);
// console.dir(code);  

//encoding given string  
function encode(string) {
  output = '';
  for (s in string)
    output += code[string[s]];
  return output;
}
const encoded = encode(params);

if (params.length < 2) {
  console.log(1, 1)
  console.log(params.slice(0, 1) + ': ' + 0)
  console.log(0)
} else if (tuples.length < 2) {
  console.log(1, params.length)
  console.log(params.slice(0, 1) + ': ' + 0)
  console.log(params.split('').map(item => {
    return '0'
  }).join(''))
} else {
  console.log(tuples.length, encoded.length)
  for (let char in code) console.log(char + ': ' + code[char])
  console.log(encoded)
}
/*
//10011101100111010(malayalam)  
decoding
//decoding that string  
function decode(tree, encoded) {
  output = '';
  p = tree;
  for (bit in encoded) {
    if (encoded[bit] == '0')

      p = p[0];
    else
      p = p[1];

    if (typeof (p) == typeof ('')) {
      output += p;
      p = tree;

    }
  }
  return output;
}
decoded = decode(tree, encoded);

console.log("Decoded as:", decoded);
//malayalam  


python code for this implementation is available at
https://github.com/niyaspkd/huffman-data-compression

*/