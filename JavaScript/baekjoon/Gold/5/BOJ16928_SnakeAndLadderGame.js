const input = require('fs').readFileSync('BOJ16928_SnakeAndLadderGame.txt', 'utf-8').trim().split('\n').map(e=>e.split(' ').map(Number));
const [n, m] = input[0];
const ls = [], visit = [];
let idx = 1;
while(idx<=n+m){
  const [s, e] = input[idx++];
  ls[s] = e;
}

function go(){
  let q = [[1, 0]];
  while(q.length){
    const [now, dice] = q.shift();
    for(let i=1; i<=6; i++){
      let next = now+i;
      if(visit[next] || next > 100) continue;
      visit[next] = 1;
      let flag = true;
      while(ls[next]){
        next = ls[next];
        if(visit[next]){
          flag = false;
          break;
        }
        visit[next] = 1;
      }
      if(!flag) continue;
      if(next === 100) return dice+1;
      q.push([next, dice+1]);
    }
  }
}

console.log(go());