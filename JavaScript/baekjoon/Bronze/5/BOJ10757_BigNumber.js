const input = require('fs').readFileSync('BOJ10757_BigNumber.txt').toString().trim().split(' ').map(e=>e.split('').reverse().join(''));
function plus (n1, n2, n3 = 0) {
  n1 = n1 | 0;
  n2 = n2 | 0;
  return n1 + n2 + n3;
}
const n = Math.max(input[0].length, input[1].length);
let p = 0;
const res = [];
for(let i=0; i<n; i++){
  let t = plus(+input[0][i], +input[1][i], p);
  p = Math.floor(t/10);
  t %= 10;
  res.push(t);
}
if(p) res.push(p);
console.log(res.reverse().join(''));
