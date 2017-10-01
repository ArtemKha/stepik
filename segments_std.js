const data = '50\n60 20\n100 50\n120 30\n';
//normalized data
let params = data.toString().split("\n").slice(1, -1).map(item => {
  return item.split(' ').map(item => parseFloat(item))
});

console.log(params)
console.log(data.toString().split("\n").slice(1, -1))