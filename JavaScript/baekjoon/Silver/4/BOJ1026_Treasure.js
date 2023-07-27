const input = require('fs').readFileSync('BOJ1026_Treasure.txt').toString().trim().split('\n');
const n = +input[0];

const a = input[1].trim().split(' ').map(Number).sort((a,b)=>a-b);
const b = input[2].trim().split(' ').map(Number).sort((a,b)=>b-a);

let res = 0;
for(let i=0; i<n; i++){
  res += a[i] * b[i];
}
console.log(res);