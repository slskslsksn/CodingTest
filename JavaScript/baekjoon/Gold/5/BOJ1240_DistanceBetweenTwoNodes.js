const input = require('fs').readFileSync('BOJ1240_DistanceBetweenTwoNodes.txt', 'utf-8').trim().split('\n').map(e=>e.trim().split(' ').map(Number));
const [N, M] = input[0];
const arr = Array.from({length: N+1}, () => []);
const dist = Array.from({length: N+1}, () => Array.from({length: N+1}, () => 0));
const visit = new Array(N+1).fill(0);
const res = [];
for(let i=1; i<N; i++){
  const [s, e, d] = input[i];
  arr[s].push(e);
  arr[e].push(s);
  dist[s][e] = d;
  dist[e][s] = d;
}

const go = (s, e, sum) => {
  if(s === e) {
    res.push(sum);
    return;
  }
  visit[s] = 1;
  for(let i = 0; i<arr[s].length; i++){
    const v = arr[s][i];
    if(visit[v]) continue;
    go(v, e, sum+dist[s][v]);
  }
}

for(let i=0; i<M; i++){
  const [s, e] = input[N+i];
  visit.fill(0);
  go(s, e, 0);
}
console.log(res.join('\n'));
