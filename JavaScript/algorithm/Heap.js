// 완전 이진 트리, 순서 상관 X
// 최대힙(Max Heap): 각 노드의 부모노드는 자식 노드보다 커야한다. => 루트는 가장 큰값
// 최소힙(Min Heap): 각 노드의 부모노드는 자식 노드보다 작아야한다. => 루트는 가장 작은값

// 라인 옆의 주석은 index가 1인경우
class MinHeap {
  constructor() {
    this.heap = []; // [undefined];
  }

  size() {
    return this.heap.length; // this.heap.length -1;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  // 이진트리의 특성으로 부모,자식 인덱스 찾기 가능
  // parentIndex: Math.floor((childIndex - 1) / 2) => childIndex / 2
  // childIndex: 2 * parentIndex + (1 or 2) => 2 * parentIndex (+1)

  peak() {
    return this.heap.length ? this.heap[0] : null;
  }

  // 삽입된 노드를 부모노드와 비교하여 자리 변경
  heapifyUp() {
    let currentIndex = this.size() - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    // MaxHeap의 경우 부등호 방향을 바꾸거나 parent, current 위치 변경
    while (parentIndex >= 0 && this.heap[parentIndex] > this.heap[currentIndex]) {
      this.swap(parentIndex, currentIndex);
      [currentIndex, parentIndex] = [parentIndex, Math.floor((parentIndex - 1) / 2)];
    }
  }

  // poll 에서 맨 마지막 노드를 루트노드로 변경했으므로 다시 위치 조정
  heapifyDown() {
    const size = this.size();
    let currentIndex = 0;
    let leftChildIndex = currentIndex * 2 + 1;
    let rightChildIndex;

    while (leftChildIndex < size) {
      let smallerChildIndex = leftChildIndex;
      rightChildIndex = currentIndex * 2 + 2;
      if (rightChildIndex < size && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[currentIndex] < this.heap[smallerChildIndex]) break;
      else this.swap(currentIndex, smallerChildIndex);

      [currentIndex, leftChildIndex] = [smallerChildIndex, smallerChildIndex * 2 + 1];
    }
  }

  add(node) {
    this.heap.push(node);
    this.heapifyUp();
  }

  poll() {
    if(this.size() <= 1) return this.peak();
    const node = this.peak();
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return node;
  }
}

const heap = new MinHeap();

heap.add(10);
heap.add(5);
heap.add(20);
heap.add(3);

console.log(heap.poll()); // 3
console.log(heap.poll()); // 5
console.log(heap.poll()); // 10
console.log(heap.poll()); // 20
