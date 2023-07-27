const input = require('fs').readFileSync('BOJ2217_Rope.txt').toString().trim().split('\n');
let n = +input[0];
const rope = input.slice(1).map(e=>+e.trim()).sort((a,b)=>a-b).map(e=>e*n--);
console.log(Math.max(...rope));

// let n = +input.shift();
// const rope = input.map(e=>+e.trim()).sort((a,b)=>a-b).map(e=>e*n--);
// let res = 0;
// for(let i=0; i<n; i++){
//   const temp = rope[i] * (i+1);
//   res = Math.max(res, temp) ;
// }