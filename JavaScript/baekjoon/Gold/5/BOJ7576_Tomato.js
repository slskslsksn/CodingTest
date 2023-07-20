const input = require('fs')
  .readFileSync('BOJ7576_Tomato.txt')
  .toString()
  .split('\n')
  .map((e) => e.trim());

const [m, n] = input
  .shift()
  .split(' ')
  .map((e) => +e);

class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(x, y) {
    const node = new Node(x, y);
    if (this.size) {
      node.prev = this.rear;
      this.rear.next = node;
      this.rear = node;
    } else {
      this.front = node;
      this.rear = node;
    }
    this.size++;
  }

  dequeue() {
    const node = this.front;
    if (this.size !== 1) {
      node.next.prev = null;
      this.front = node.next;
    } else {
      this.front = null;
      this.rear = null;
    }
    this.size--;
    return node;
  }
}

const q = new Queue();
let zero = 0;
const box = [];
for (let y = 0; y < input.length; y++) {
  box.push(
    input[y].split(' ').map((e, x) => {
      if (e === '0') zero++;
      else if (e === '1') q.enqueue(x, y);
      return +e;
    })
  );
}

if (zero === 0) {
  console.log(0);
  return;
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let day = 0;
while (q.size) {
  const { x, y } = q.dequeue();
  day = box[y][x];
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
    if (box[ny][nx]) continue;
    box[ny][nx] = box[y][x] + 1;
    q.enqueue(nx, ny);
    zero--;
  }
}

console.log(zero ? -1 : day - 1);
