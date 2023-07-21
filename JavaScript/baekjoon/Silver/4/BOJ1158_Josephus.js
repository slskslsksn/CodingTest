const input = require('fs').readFileSync('BOJ1158_Josephus.txt').toString();
const [n, k] = input.split(' ').map(Number);

class Node {
  constructor(prev, n) {
    this.prev = prev;
    this.next = null;
    this.n = n;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(n) {
    const node = new Node(this.rear, n);
    if (this.size === 0) this.front = node;
    else this.rear.next = node;
    this.rear = node;
    this.size++;
  }

  dequeue() {
    const node = this.front;
    if (this.size === 1) {
      this.front = null;
      this.rear = null;
    } else {
      node.next.prev = null;
      this.front = node.next;
    }
    this.size--;
    return node;
  }
}

const q = new Queue();
for (let i = 1; i <= n; i++) {
  q.enqueue(i);
}

const result = [];
while (q.size) {
  for (let i = 0; i < k - 1; i++) {
    q.enqueue(q.dequeue().n);
  }
  result.push(q.dequeue().n);
}

console.log(`<${result.join(', ')}>`);
