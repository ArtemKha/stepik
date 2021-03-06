class Heap {
  constructor() {
    this.list = [];

    this.add = this.add.bind(this);
    this.swap = this.swap.bind(this);
    this.getMax = this.getMax.bind(this);
    this.heapify = this.heapify.bind(this);
    this.buildHeap = this.buildHeap.bind(this);
  }

  heapSize() {
    return this.list.length;
  }

  add(value) {
    this.list.push(value);
    let i = this.heapSize() - 1;
    let parent = Math.floor((i - 1) / 2);

    while (i >= 0 && this.list[parent] < this.list[i]) {
      this.swap(i, parent)
      i = parent;
      parent = Math.floor((i - 1) / 2);
    }

  }

  swap(i, obj) {
    let temp = this.list[i];
    this.list[i] = this.list[obj];
    this.list[obj] = temp;
  }

  heapify(i) {
    let leftChild, rightChild, largestChild;

    for (; ;) {
      leftChild = 2 * i + 1;
      rightChild = 2 * i + 2;
      largestChild = i;
      
      if (leftChild < this.heapSize() && this.list[leftChild] > this.list[largestChild]) {
        largestChild = leftChild;
      }
      if (rightChild < this.heapSize() && this.list[rightChild] > this.list[largestChild]) {
        largestChild = rightChild;
      }

      if (largestChild === i) {
        break;
      }
      
      this.swap(i, largestChild);
      i = largestChild;
    }
  }

  buildHeap(sourceArray) {
    this.list = sourceArray;
    for (let i = Math.floor(this.heapSize() / 2); i >= 0; i--) {
      this.heapify(i);
    }
  }

  getMax() {
    let result = this.list[0];
    const last = this.heapSize() - 1;
    this.list[0] = this.list[last];
    this.list.pop(last);
    this.heapify(0);
    return result;
  }

  heapSort(array) {
    this.buildHeap(array);
    for (let i = array.Length - 1; i >= 0; i--) {
      array[i] = this.getMax();
      heapify(0);
    }
    return array;
  }
}

const heap = new Heap();
const heapSort = new Heap();

// heap.add(9);
// heap.add(7);
heap.buildHeap([4,3,5,6,1,2,7]);

console.log(heap.getMax());
console.log('heap', heap.list);
console.log(heap.getMax());
console.log('heap', heap.list);
console.log(heap.getMax());
console.log('heap', heap.list);
console.log(heap.getMax());
console.log('heap', heap.list);
console.log(heap.getMax());
console.log('heap', heap.list);
console.log(heap.getMax());
console.log('heap', heap.list);
// console.log('heapsort', heapSort.heapSort([4, 3, 5, 6, 1, 2, 7]))
