const input = require('fs').readFileSync('BOJ13023_ABCDE.txt').toString().trim().split('\n').map(e=>e.trim().split(' ').map(e=>+e));
const [N, M] = input[0];
const arr = Array.from({length: N}, () => []);
const visit = Array.from({length: N}, () => 0);
for(let i=1; i<=M; i++){
  const [a, b] = input[i];
  arr[a].push(b);
  arr[b].push(a);
}
let res = 0;
function go(n, cnt){
  if(cnt === 5) {
    res = 1;
    return;
  };
  visit[n] = 1;
  for(const node of arr[n]){
    if(!visit[node]){
      go(node, cnt+1);
      if(res) break;
    }
  }
  visit[n] = 0;
}

for(let i=0; i<N && !res; i++){
  go(i, 1)
}
console.log(res);