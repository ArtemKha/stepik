
function mergeSort(A, l, r) {
  if (A.length < 2) return [A[0]];

  let m = Math.floor((l + r) / 2);
  const sorted = (A, l, r) => mergeSort(A.slice(l, r), l, r);
  return merge(sorted(A, l, m), sorted(A, m + 1, r));
  if (l < r) {
  }
}

function merge(node1, node2) {
  let arr = [];
  while (node1.length > 0 && node2.length > 0) {
    arr.push(node1[0] > node2[0] ? node2.shift() : node1.shift());
  }
  return arr.concat(node1.length === 0 ? node2 : node1);
}

const array = [6, 7, 1, 2, 3, 5, 23, 234, 57, 786656, 56893, 45657, 4, 5, 9];
console.log('mergeSort', mergeSort(array, 0, array.length));