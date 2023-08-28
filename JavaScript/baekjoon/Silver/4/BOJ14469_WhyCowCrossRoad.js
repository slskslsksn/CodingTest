const input = require('fs').readFileSync('BOJ14469_WhyCowCrossRoad.txt', 'utf-8').trim().split('\n');
const arr = input.slice(1).map(e=>e.trim().split(' ').map(Number)).sort((a,b)=>b[0]-a[0]);

let now = 0;
while(arr.length){
  const [t1, t2] = arr.pop();
  if(t1 > now) now += t1 - now;
  now += t2;
}
console.log(now)