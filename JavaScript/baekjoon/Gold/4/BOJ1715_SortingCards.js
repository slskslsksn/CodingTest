const [n, ...input] = require('fs').readFileSync('BOJ1715_SortingCards.txt','utf-8').trim().split('\n').map(Number);

class Queue{
  constructor() {
    this.heap = [];
  }
    
  swap(a, b) {
      const temp = this.heap[a];
      this.heap[a] = this.heap[b];
      this.heap[b] = temp;
  }

  push(value) {
    const { heap } = this;
    heap.push(value);
    let index = heap.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while (index > 0 && heap[index] < heap[parent]) {
      this.swap(index, parent);
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    const { heap } = this;
    if (heap.length <= 1) {
      return heap.pop();
    }

    const output = heap[0];
    heap[0] = heap.pop();
    let index = 0;

    while (index * 2 + 1 < heap.length) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let next = index;

      if (heap[left] < heap[next]) {
        next = left;
      }

      if (right < heap.length && heap[right] < heap[next]) {
        next = right;
      }

      if (index === next) {
        break;
      }

      this.swap(index, next);
      index = next;
    }

    return output;
  }
}

const q = new Queue();
for(let i=0; i<n; i++){
  q.push(input[i]);
}

let sum = 0;
while(q.heap.length() > 1){
  const num = q.pop() + q.pop();
  sum += num;
  q.push(num);
}
console.log(sum);