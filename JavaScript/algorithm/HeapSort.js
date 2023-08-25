
function heapify(arr, length, idx){
  let left = idx * 2 + 1;
  let right = idx * 2 + 2;
  let parent = idx;
  
  if(left < length && arr[left] > arr[parent]){
    parent = left;
  }
  if(right < length && arr[right] > arr[parent]){
    parent = right;
  }

  if(parent !== idx){
    [arr[idx], arr[parent]] = [arr[parent], arr[idx]];
    heapify(arr, length, parent);
  }
}

function heapSort(arr){
  const length = arr.length;
  if(length <= 1) return;
  
  // 먼저 배열을 heap 상태로 만들기
  for(let i=Math.floor(length/2)-1; i>=0; i--){
    heapify(arr, length, i);
  }

  // 정렬하기
  for(let i=length-1; i; i--){
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

console.log(heapSort([12, 1, 11, 65, 73, 13, 5, 6, 7])); 