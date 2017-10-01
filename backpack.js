// let stdin = process.openStdin();
// stdin.on('data', function (data) {
//   let params = data.toString().split(" ");



//   console.log(result);
// });

const data = '3 50\n60 20\n100 50\n120 30\n';
//normalized data
let params = data.toString().split("\n").slice(0, -1).map( item => {
  return item.split(' ').map( item => parseFloat(item))
});

const volume = params.slice(0, 1)[0][1]
const numberItems = params.slice(0, 1)[0][0]
const items = params.slice(1).sort(sortByValue)

function sortByValue(a, b){
  return b[0] / b[1] - a[0] / a[1]
}

function putInPack(items, volume) {
  let value = 0
  let i = 0
  
  while (volume !== 0 && i !== numberItems) {
    const item = items[i]
    const valueItem = item[0]/item[1]

    if ( item[1] < volume ) {
      value += item[0]
      volume -= item[1]
    } else {
      value += volume * valueItem
      volume = 0
    }
    
    i++
  }

  return value
}

// console.log(numberItems);
console.log(putInPack(items, volume));