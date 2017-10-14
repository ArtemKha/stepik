class Heap {
  constructor() {
    this.list = [5, 3, 1];

    this.add = this.add.bind(this);
    this.swap = this.swap.bind(this);
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

  swap(i, parent) {
    let temp = this.list[i];
    this.list[i] = this.list[parent];
    this.list[parent] = temp;
  }
}

const heap = new Heap();
heap.add(9);
console.log('heap', heap.list)


const queue = [ 20, 30, 40 ]

function insert(value) {
  queue.push(value)
  const i = queue.length - 1
  const parent = Math.floor(i / 2)
  bubble(i, parent)
}


function bubble(i, parent) {
  if (queue[i] < queue[parent]) {
    moveUp(i, parent)
  }
}



// insert(10)
// moveUp(3)
// console.log(queue)