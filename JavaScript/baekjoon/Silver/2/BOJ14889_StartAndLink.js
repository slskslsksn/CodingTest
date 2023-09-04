const input = require('fs').readFileSync('BOJ14889_StartAndLink.txt', 'utf-8').split('\n');
const n = +input[0];
const arr = input.slice(1).map(e=>e.trim().split(' ').map(Number));

const count = (i) => {
  let cnt = 0;
  while(i){
    if(i & 1) cnt++;
    i >>= 1;
  }
  return cnt;
}

const get = (start, link) => {
  let sum1 = 0, sum2 = 0;
  for(let i=0; i<n/2; i++){
    for(let j=0; j<n/2; j++){
      if(i!==j){
        sum1 += arr[start[i]][start[j]];
        sum2 += arr[link[i]][link[j]];
      }
    }
  }
  return Math.abs(sum1 - sum2);
}

let res = 1e9;
for(let i=0; i<(1 << n); i++){
  if(count(i) !== n/2) continue;
  const start = [], link = [];
  for(let j=0; j<n; j++){
    if(i & (1 << j)) start.push(j);
    else link.push(j);
  }
  res = Math.min(res, get(start, link));
}
console.log(res);
