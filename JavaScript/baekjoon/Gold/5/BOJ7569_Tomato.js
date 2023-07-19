// TODO 큐를 직접 구현해서 해결

const input = require('fs').readFileSync('BOJ7569_Tomato.txt').toString().trim().split('\n').map(e=>e.trim());
const [m, n, h] = input.shift().split(' ').map(e=>+e);

// const tomatoes = [];
// const q = [];
// let zero = 0;
// for(let i=0; i<h; i++){
//   const tomato = [];
//   for(let j=0; j<n; j++){
//     tomato.push(input.shift().split(' ').map((e, idx)=>{
//       if(e === '0') zero++;
//       if(e === '1') {
//         q.push([i, j, idx]);
//       }
//       return +e;
//     }));
//   }
//   tomatoes.push(tomato);
// }

// const dx = [1, 0, 0, -1, 0, 0];
// const dy = [0, 1, -1, 0, 0, 0];
// const dz = [0, 0, 0, 0, 1, -1];
// let day = 0;
// while(q.length){
//   const [z, y, x] = q.shift();
//   day = tomatoes[z][y][x];
//   for(let i=0; i<6; i++){
//     const [ny, nx, nz] = [y+dy[i], x+dx[i], z+dz[i]];
//     if(ny < 0 || ny >= n || nx < 0 || nx >= m || nz < 0 || nz >= h) continue;
//     if(tomatoes[nz][ny][nx]) continue;
//     tomatoes[nz][ny][nx] = tomatoes[z][y][x] + 1;
//     q.push([nz, ny, nx]);
//     zero--;
//   }
// }

// console.log( zero ? -1 : day-1);

class Node {
  constructor(x, y, z){
    this.prev = null;
    this.next = null;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  getNext(){
    this.next.prev = null;
    return this.next;
  }
}

class Queue {
  constructor () {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(x, y, z){
    const node = new Node(x, y, z);
    if(!this.size){
      this.front = node;
      this.rear = node;
    }else{
      this.rear.next = node;
      node.prev = this.rear;
      this.rear = node;
    }
    this.size++;
  }

  dequeue() {
    const node = this.front;
    if(this.size === 1){
      this.front = null;
      this.prev = null;
    }else{
      this.front = node.getNext();
    }
    this.size--;
    return node;
  }
}

const tomatoes = [];
const q = new Queue();
let zero = 0;
for(let i=0; i<h; i++){
  const tomato = [];
  for(let j=0; j<n; j++){
    tomato.push(input.shift().split(' ').map((e, idx)=>{
      if(e === '0') zero++;
      if(e === '1') {
        q.enqueue(idx, j, i);
      }
      return +e;
    }));
  }
  tomatoes.push(tomato);
}

const dx = [1, 0, 0, -1, 0, 0];
const dy = [0, 1, -1, 0, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];
let day = 0;
while(q.size){
  const {x, y, z} = q.dequeue();
  day = tomatoes[z][y][x];
  for(let i=0; i<6; i++){
    const [ny, nx, nz] = [y+dy[i], x+dx[i], z+dz[i]];
    if(ny < 0 || ny >= n || nx < 0 || nx >= m || nz < 0 || nz >= h) continue;
    if(tomatoes[nz][ny][nx]) continue;
    tomatoes[nz][ny][nx] = tomatoes[z][y][x] + 1;
    q.enqueue(nx, ny, nz);
    zero--;
  }
}

console.log( zero ? -1 : day-1);
