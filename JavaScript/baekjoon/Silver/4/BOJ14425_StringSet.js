const input = require('fs').readFileSync('BOJ14425_StringSet.txt', 'utf-8').trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const s = new Set();
let res = 0;
for(let i=1; i<=n; i++){
  s.add(input[i]);
}
for(let i=n+1; i<=n+m;i++){
  if(s.has(input[i])) res++
}
console.log(res);