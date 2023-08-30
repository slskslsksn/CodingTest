const input = require('fs').readFileSync('BOJ13144_ListofUniqueNumbers.txt', 'utf-8').trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);
const out = new Array(100001).fill(0);
let res = 0, s = e = 0;

while(e < n){
  if(!out[arr[e]]) out[arr[e++]]++;
  else{
    res += e-s;
    out[arr[s++]]--;
  }
}
res += (e-s) * (e-s+1) / 2;
console.log(res);