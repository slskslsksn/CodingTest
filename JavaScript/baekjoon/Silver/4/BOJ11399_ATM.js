const input = require('fs').readFileSync('BOJ11399_ATM.txt').toString().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number).sort((a,b)=>a-b);

let sum = new Array(n).fill(0);
sum[0] = arr[0];
for(let i=1; i<n; i++){
  sum[i] = sum[i-1]+arr[i];
}
console.log(sum.reduce((a, c) => a + c, 0));