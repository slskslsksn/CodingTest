const input = require('fs').readFileSync('BOJ11659_PreSum4.txt', 'utf-8').trim().split('\n').map(e=>e.trim().split(' ').map(Number));
const [n, m] = input[0];
const arr = input[1];
const sum = [0];
for(let i=1; i<=n; i++){
  sum [i] = arr[i-1] + sum[i-1];
}
const res = [];
let idx = 2, end = 2+m;
for(;idx<end; idx++){
  const [s,e] = input[idx];
  res.push(sum[e]-sum[s-1]);
}
console.log(res.join('\n'));