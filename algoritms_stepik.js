// fibonacci defined

function fib1(n){
    if (n <= 1)
        return 1;
    return fib1(n - 1) + fib1(n - 2);
}

console.log('fibonacci, recursion = ' + fib1(10));

function fib2(n){
    if (n <= 1)
        return 1;

    let A = [];
    A[0] = 0;
    A[1] = 1;
    for (let i = 2; i <= n; i++){
        A[i] = (A[i-1] + A[i-2]);
    }
    return A[n];
}

console.log('fibonacci, iteration = ' + fib2(13));

// fib lastDigit

function fib3(n){
    if (n <= 1)
        return 1;

    let A = [];
    A[0] = 0;
    A[1] = 1;
    for (let i = 2; i <= n; i++){
        A[i] = (A[i-1] + A[i-2]) % 10;
    }

    return A[n];
}

console.log('fibonacci, lastNumber = ' + fib3(13));

// euclid

function euclid(a,b) {
    if (a === 0)
        return b;
    if (b === 0)
        return a;
    if (a >= b)
        return euclid(a % b, b);
    if (b >= a)
        return euclid(a, b % a)
}

console.log('euclid = ' + euclid(80, 22));

// countSort

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function countSort(array) {
    let countArray = [];
    let max = getMaxOfArray(array);
    for (let i = 1; i <= max; i++) {
        countArray[array[i]] = 0;
    }
    for (let j = 1; j <= array.length; j++) {
        countArray[array[j]] = countArray[array[j]] + 1;
    }
    let k = 1;
    let arrayNew = [];
    for (let i = 1; i <= array.length; i++) {
        for (let j = 1; j <= countArray[i]; j++) {
            arrayNew[k] = i;
            k++;
        }
    }
    return arrayNew;
}

console.log(countSort([4, 1, 2, 4, 1, 2, 3, 3, 5, 6, 1]));


// evclid

let stdin = process.openStdin();
stdin.on('data', function(data){
    let params = data.toString().split(" ");
    
    function euclid(a,b) {
      if (a == 0) return b;
      if (b == 0) return a;
      if (a >= b)
        return euclid(a % b, b);
      if (b >= a)
        return euclid(a, b % a)
    }

    console.log(euclid(params[0], params[1]));
});

// wireframe

let stdin = process.openStdin();
stdin.on('data', function(data){
    let params = data.toString().split(" ");
    
    

    console.log(result);
});

// решение мое 2ой Fibonacci

var stdin = process.openStdin();
stdin.on('data', function(data){
    var n = data.toString().split(" ");
    
    function fib3(n){
      if (n <= 1)
        return 1;
    
      let A = [];
      A[0] = 0;
      A[1] = 1;
      for (let i = 2; i <= n; i++){
        A[i] = (A[i-1] + A[i-2]) % 10;
      }

      return A[n];
    }
                               
    console.log(fib3(n));
});

// решение мое 1ой Fibonacci

// put your javascript (node.js) code here

var stdin = process.openStdin();

stdin.on('data', function(data){
    var n = data.toString().split(" ");
    
    function fib2(n){
      if (n <= 1)
        return 1;
      
      let A = [];
      A[0] = 0;
      A[1] = 1;
      for (let i = 2; i <= n; i++){
        A[i] = (A[i-1] + A[i-2]);
      }
      return A[n];
    }
                               
    console.log(fib2(n));
});

// решение 1ой Fibonacci
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    getFib(input_stdin_array);    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function getFib(num){
    //console.log(num)
	var arr = [0, 1],
  		i = 1;
  while(--num) {
  	arr.push(arr[i] + arr[i-1])
    i++;
  }
  console.log(arr[arr.length - 1])
}


// pointCover
var stdin = process.openStdin();
stdin.on('data', function(data) {
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

    const pairs = pairArray(array);

    function pointsCover(array) {
        if (array.length === 0) return null
        const sorted = sortSegments(array)
        const points = []
        let current = 0

        while (current < sorted.length) {
            const rightPoint = sorted[current][1]
            points.push(rightPoint)
            current = nextPoint(sorted, current)
        }

        return points
    }

    function nextPoint(sorted, current) {
        const segment = sorted[current]
        let next = current + 1

        //until it isn't false the segments are crossed
        while (next < sorted.length && isCrossed(segment, sorted[next])) {
            next++
        }

        return next
    }

    //isCrossed
    //the right point of the first segment compares with the left point of the second one
    function isCrossed(segment1, segment2) {
        return segment1[1] >= segment2[0]
    }

    function sortSegments(array) {
        return array.sort(compareSegments)
    }

    function compareSegments(a, b) {
        return a[1] - b[1]
    }

    const points = pointsCover(pairs)
    const result = [points.length].concat(points).join(' ')
    console.log(result)
});