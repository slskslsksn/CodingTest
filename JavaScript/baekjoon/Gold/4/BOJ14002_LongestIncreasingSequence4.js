const input = require('fs').readFileSync('BOJ14002_LongestIncreasingSequence4.txt', 'utf-8').trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);
const lis = new Array(n).fill(1);
const pre = new Array(n).fill(-1);
let cnt = 0;
let idx = 0;
for(let i=0; i<n; i++){
  for(let j=0; j<i; j++){
    if(arr[i] > arr[j] && lis[i] < lis[j] + 1){
      lis[i] = lis[j] + 1;
      pre[i] = j;
    }
  }
  if(cnt < lis[i]){
    cnt = lis[i];
    idx = i;
  }
}
console.log(pre);
while(idx !== -1){
  res.push(arr[idx]);
  idx = pre[idx];
}
console.log(cnt);
console.log(res.reverse().join(' '));
