const [[n,m,r],...input] = require('fs').readFileSync('BOJ24479_DFS1.txt').toString().trim().split('\n').map(e=>e.split(' ').map(Number));
const arr = Array.from({length: n+1}, ()=>[]);
const visit = new Array(n+1).fill(0);
let order = 1;
for(const [s,e] of input){
  arr[s].push(e);
  arr[e].push(s);
}
for(let i=1; i<=n; i++){
  if(arr[i].length) arr[i].sort((a,b)=>a-b);
}

function dfs(node){
  for(let i=0; i<arr[node].length; i++){
    const next = arr[node][i];
    if(visit[next]) continue;
    visit[next] = order++;
    dfs(next);
  }
}

visit[r] = order++;
dfs(r);

visit.shift();
console.log(visit.join('\n'));