const input = require('fs').readFileSync('BOJ9205_WalkWithDrinkBeer.txt').toString().trim().split('\n').map(e=>e.trim().split(' ').map(Number));
let T = input.shift()[0];
const ans = [];

function comp(a, b){
  return Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]);
}

let idx = 0;
while(T--){
  const n = input[idx++];
  const market = [];
  const home = input[idx++];
  for(let i=0; i<n; i++){
    market.push(input[idx++]);
  }
  const festival = input[idx++];
  const visit = [];
  const q = [home];
  let flag = false;
  while(q.length){
    const now = q.shift();
    if(comp(now, festival) <= 1000){
      flag = true;
      break;
    }
    for(let i=0; i<n; i++){
      if(visit[i]) continue;
      if(comp(now, market[i]) > 1000) continue;
      visit[i] = true;
      q.push(market[i]);
    }
  }
  if(flag) ans.push('happy');
  else ans.push('sad');
}
console.log(ans.join('\n'));