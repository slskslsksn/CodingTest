let n = 0;
const input = require('fs').readFileSync('BOJ1377_BubbleSort.txt').toString().trim().split('\n').map((v, i) => {
  v = +v.trim();
  if(i===0) n = v;
  return v;
}).slice(1, n+1).map((v, i) => {
  return {
    value: v,
    index: i,
  }
}).sort((a,b) => a.value - b.value);
let max = 0;
for(let i=0; i<n; i++){
  max = Math.max(max, input[i].index - i);
}
console.log(max + 1);