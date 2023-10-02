let [[t], ...input] = require('fs').readFileSync('BOJ7795_EatOrEaten.txt','utf-8').trim().split('\n').map(e=>e.split(' ').map(Number));

let res = [];
let idx = 0;
let n, m, a, b;
const sorting = (n1, n2) => n1-n2;
while(t--){
  [[n, m], a, b] = [input[idx++], input[idx++], input[idx++]];
  a.sort(sorting);
  b.sort(sorting);
  let sum = 0;
  for(let i=0; i<n; i++){
    const num = a[i];
    let l=0, r=m-1;
    let ans = 0;
    while(l<=r){
      const mid = Math.floor((l+r)/2);
      if(mid < 0 || mid >= m) break;
      if(num > b[mid]){
        ans = mid+1;
        l = mid+1;
      }else{
        r = mid-1;
      }
    }
    sum += ans;
  }
  res.push(sum);
}
console.log(res.join('\n'));