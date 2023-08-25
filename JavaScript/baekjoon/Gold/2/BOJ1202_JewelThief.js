const input = require('fs').readFileSync('BOJ1202_JewelThief.txt').toString().trim().split('\n');
const [n, k] = input[0].trim().split(' ').map(Number);
const jewel = input.slice(1, n+1).map(e=>e.trim().split(' ').map(Number)).sort((a,b)=>a[0]-b[0]);
const bag = input.slice(n+1).map(e=>e.trim()).map(Number).sort((a,b)=>a-b);


class Queue{
  constructor(){
    this.heap = [];
  }

  swap(a, b){
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  enqueue(node){
    this.heap.push(node);
    let index = this.heap.length - 1;
    while(index > 0){
      const parent = Math.floor((index-1)/2);
      if(this.heap[parent] >= this.heap[index]) break;
      this.swap(index, parent);
      index = parent;
    }
  }

  dequeue() {
    const weight = this.heap[0];
    const last = this.heap.pop();
    if(this.heap.length > 0){
      this.heap[0] = last;
      let index = 0;
      
      while(1){
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let large = index;
        if(left < this.heap.length && this.heap[left] > this.heap[large]) large = left;
        if(right < this.heap.length && this.heap[right] > this.heap[large]) large = right;
        if(index === large) break;
        this.swap(index, large);
        index = large;
      }
    }
    return weight;
  }

  size() {
    return this.heap.length;
  }
}

const q = new Queue();
let res = 0;
let j = 0;
for(let i=0; i<k; i++){
  while(j<n && jewel[j][0] <= bag[i]) q.enqueue(jewel[j++][1]);
  if(q.size()){
    res+=q.dequeue();
  }
}
console.log(res);