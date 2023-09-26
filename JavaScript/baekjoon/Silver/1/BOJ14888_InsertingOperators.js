const input = require('fs').readFileSync('BOJ14888_InsertingOperators.txt', 'utf-8').trim().split('\n');
const n = +input[0];
const nums = input[1].split(' ').map(Number);
const ops = input[2].split(' ').map(Number);

function calculate(a, b, op){
  switch(op){
    case 0: return a + b;
    case 1: return a - b;
    case 2: return a * b;
    case 3: return Math.trunc(a/b);
  }
}

let res = [-Infinity, Infinity];
function go(sum, next){
  if(next === n){
    res[0] = Math.max(res[0], sum);
    res[1] = Math.min(res[1], sum);
    return;
  }

  for(let i=0; i<4; i++){
    if(ops[i]){
      ops[i]--;
      go(calculate(sum, nums[next], i), next+1);
      ops[i]++;
    }
  }
}
go(nums[0], 1);
console.log(res.join('\n'));