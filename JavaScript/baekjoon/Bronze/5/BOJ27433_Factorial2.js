const input = require('fs').readFileSync('test.txt', 'utf-8').trim().split('\n');
const n = +input[0];
let s = 1;
for(let i=1; i<=n; i++){
  s *= i;
}
console.log(s);