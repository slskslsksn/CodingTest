const input = require('fs').readFileSync('BOJ1269_SymentricDifference.txt', 'utf-8').trim().split('\n').map(e=>e.split(' ').map(Number));
const [n, m] = input[0];
const [A, B] = [input[1], input[2]];

A.sort((a,b)=>a-b);
B.sort((a,b)=>a-b);

let res = 0;
let ai = 0, bi = 0;
while(ai<n && bi<m){
  const an = A[ai];
  const bn = B[bi];
  if(an === bn){
    while(ai<n && A[ai] === an) ai++;
    while(bi<m && B[bi] === bn) bi++;
  }else{
    if(an < bn) ai++;
    else bi++;
    res++;
  }
}

if(ai<n) res += n - ai;
else res += m - bi;
console.log(res);



/* 이 방법이 조금 더 느렸음 */

// const m = new Map();
// let res = 0;
// input[1].map((e)=>{
//   if(!m[e]) {
//     m[e] = 1;
//     res++;
//   }
// })
// input[2].map((e)=>{
//   if(!m[e]){
//     m[e] = 1;
//     res++;
//   }else if(m[e] === 1) {
//     res--;
//     m[e] = 2;
//   }
// })
// console.log(res);