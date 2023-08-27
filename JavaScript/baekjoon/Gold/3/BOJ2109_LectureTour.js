const [N, ...lectures] = require('fs').readFileSync('BOJ2109_LectureTour.txt', 'utf-8').trim().split('\n').map(e=>e.trim().split(' ').map(Number));
lectures.sort((a,b) => a[1]-b[1]);

class PQ {
  constructor(){
    this.heap = [];
  }

  swap(a, b){
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  size(){
    return this.heap.length;
  }


  push(value){
    this.heap.push(value);
    let index = this.heap.length - 1;
    while(index > 0){
      const parent = Math.floor((index-1)/2)
      if(this.heap[parent] <= this.heap[index]) break;
      this.swap(index, parent);
      index = parent;
    }
  }

  pop(){
    const value = this.heap[0];
    const last = this.heap.pop();

    const length = this.heap.length;
    if(length > 0){
      this.heap[0] = last;
      let index = 0;
      while(1){
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let small = index;
        if(left < length && this.heap[left] < this.heap[small]) small = left;
        if(right < length && this.heap[right] < this.heap[small]) small = right;
        if(small === index) break;
        this.swap(index, small);
        index = small;
      }
    }
    return value;
  }
}

const q = new PQ();

for(let i=0; i<N[0]; i++){
  const [p, d] = lectures[i];
  q.push(p);
  if(d < q.size()) q.pop();
}
let res = 0;
while(q.size()){
  res += q.pop();
}
console.log(res);