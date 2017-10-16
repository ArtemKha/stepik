// const array = ['1', '5', '8', '12', '13'];
const array = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
// const nums = ['8', '1', '23', '1', '11'];

function binarySearch(A, x) {
  let l = 0;
  let r = A.length - 1;
  let m;
  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (parseInt(A[m]) === x) return m + 1;
    else if (x > parseInt(A[m]))
      l = m + 1;
    else if (x < parseInt(A[m]))
      r = m - 1;
  }
  return -1;
}

// const arr = array.map( item => parseInt(item));

let result = '' 
nums.forEach(num => {
  result += binarySearch(array, parseInt(num)) + ' ';
});

console.log(result);