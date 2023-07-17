const input = require('fs').readFileSync('BOJ2606_Virus.txt').toString().trim().split('\n').map(e=>e.trim());
const n = +input.shift();
input.shift();

const computer = Array.from({length: n+1}, () => []);
const isVisit = new Array(n+1).fill(false);
for(const t of input){
  const [a, b] = t.split(' ').map(e=>+e);
  computer[a].push(b);
  computer[b].push(a);
}

const dfs = (x) =>{
  isVisit[x] = true;
  for(const c of computer[x]){
    if(isVisit[c]) continue;
    dfs(c);
  }
}

dfs(1);

let cnt = -1;
for(const v of isVisit){
  if(v) cnt++;
}
console.log(cnt);
