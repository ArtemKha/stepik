
// wireframe

let stdin = process.openStdin();
stdin.on('data', function (data) {
  let params = data.toString().split(" ");



  console.log(result);
});

(function stdin() {
  const data = '4 4 7 1 3 2 5 5 6'
  let params = data.split(" ").slice(1);
  const array = params.map((num, i) => {
    return parseInt(num)
  })

  function pairArray(a) {
    var temp = a.slice();
    var arr = [];

    while (temp.length) {
      arr.push(temp.splice(0, 2));
    }

    return arr;
  }

  const pairs = pairArray(array)
  console.log(pairArray(array))
})();