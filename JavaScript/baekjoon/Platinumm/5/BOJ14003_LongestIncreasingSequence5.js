const [n, input] = require('fs').readFileSync('BOJ14003_LongestIncreasingSequence5.txt', 'utf-8').trim().split('\n');
const arr = input.split(' ').map(Number);
const lis = [];
let lidx = 0;

const find = (num) => {
  let idx = -1;
  let l=0; r=lidx;
  while(l<=r){
    const mid = ((l+r)/2) >> 0;
    if(lis[mid] >= num){
      idx = mid;
      r = mid-1;
    }else l=mid+1;
  }
  return idx;
} 

for(let i=0; i<+n; i++){
  const num = arr[i];
  const idx = find(num);
  let realIdx = idx > -1 ? idx : lidx++;
  lis[realIdx] = num;
  arr[i] = [arr[i], realIdx];
}
console.log(lis.length);
let res = [];
for(let i=+n-1, len=lis.length-1; i>=0; i--){
  if(arr[i][1] === len){
    res.push(arr[i][0]);
    len--;
  }
}
console.log(res.reverse().join(' '));