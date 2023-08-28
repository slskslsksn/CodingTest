const input = require('fs').readFileSync('BOJ1781_CupRamyeon.txt', 'utf-8').trim().split('\n');
const [n, arr] = [+input[0], input.slice(1).map(e=>e.trim().split(' ').map(Number)).sort((a,b)=>a[0]-b[0])];
class Queue {
  constructor(){
    this.heap = [];
  }
  swap(a, b){
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  size(){return this.heap.length;}

  push(value){
    this.heap.push(value);
    let index = this.heap.length -1;
    while(index > 0){
      const parent = Math.floor((index-1)/2);
      if(this.heap[parent] <= this.heap[index]) break;
      this.swap(parent, index);
      index = parent;
    }
  }
  
  pop(){
    const value = this.heap[0];
    const last = this.heap.pop();
    const length = this.heap.length;
    if(length){
      this.heap[0] = last;
      let index = 0;
      while(1){
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let small = index;
        if(left < length && this.heap[left] < this.heap[small]) small = left;
        if(right < length && this.heap[right] < this.heap[small]) small = right;
        if(small === index) break;
        this.swap(small, index);
        index = small;
      }
    }
    return value;
  }
}

const q = new Queue();
for(let i=0; i<n; i++){
  const [d, r] = arr[i];
  q.push(r);
  if(d < q.size()) q.pop();
}
let res = 0;
while(q.size()){
  res += q.pop();
}
console.log(res);