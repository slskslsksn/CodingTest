const input = require('fs').readFileSync('BOJ2110_InstallRouter.txt', 'utf-8').trim().split('\n');
const [N, C] = input[0].trim().split(' ').map(Number);
const arr = input.slice(1).map(e=>+e).sort((a,b)=>a-b);

let start = 1, end = arr[N-1] - arr[0];
let res = 0;
while(start <= end){
  const mid = Math.floor((start + end)/2);
  let cnt = C-1;
  let last = 0, next = 1;
  while(next<N && cnt){
    if(arr[next] >= arr[last] + mid){
      last = next++;
      cnt--;
    }else{
      next++;
    }
  }
  if(cnt){
    end = mid-1;
  }else{
    res = mid;
    start = mid+1;
  }
}
console.log(res);