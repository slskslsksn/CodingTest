const input = require('fs').readFileSync('BOJ1931_AssignedConferenceRoom.txt').toString().trim().split('\n').map(e=>e.trim().split(' ').map(Number));
const n = +input.shift()[0];
input.sort((a,b)=> a[1]-b[1] || a[0] - b[0]);
let res = 0, now = 0;
input.forEach(([s, e]) => {
  if(s < now) return;
  res++;
  now = e;
})
console.log(res);