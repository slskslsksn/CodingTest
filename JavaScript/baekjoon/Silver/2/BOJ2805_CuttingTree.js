const input = require('fs').readFileSync('BOJ2805_CuttingTree.txt', 'utf-8').trim().split('\n');
const [N, M] = input[0].trim().split(' ').map(Number);
let max = 0;
const arr = input[1].split(' ').map(e=>{
  e = +e;
  max = Math.max(max, e);
  return e;
})

let res = 0, ans = Number.MAX_SAFE_INTEGER;
function go(start, end){
  if(start > end) return;
  const mid = Math.floor((start+end)/2);
  let sum = 0;
  for(let i=0; i<N; i++){
    sum += arr[i] - mid > 0 ? arr[i] - mid : 0;
  }
  if(sum >= M && ans >= sum){
    res = mid
  }
  if(sum > M){
    go(mid+1, end);
  }else{
    go(start, mid-1);
  }
}

go(1, max-1);
console.log(res);