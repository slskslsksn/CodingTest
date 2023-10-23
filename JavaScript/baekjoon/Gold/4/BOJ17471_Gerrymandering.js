const input = require('fs').readFileSync('BOJ17471_Gerrymandering.txt', 'utf-8').trim().split('\n');
const n = +input[0];
const people = input[1].split(' ').map(Number);
const map = Array.from({length: n+1}, () => []);
people.unshift(0);
let zeroCnt = 0;
input.slice(2).map((value,i) => {
  const [n, ...arr] = value.split(' ').map(Number);
  if(n){
    const s = i+1;
    for(let k=0; k<n; k++){
      const e = arr[k];
      map[s].push(e);
    }
  }else{
    zeroCnt++;
  }
});
if(n > 2 && zeroCnt > 1) console.log(-1);
else{
  let visit = [];
  let comp = [];
  let res = Infinity;
  const dfs = (here, value) => {
    visit[here] = 1;
    if(here === -1) console.log(here, value);
    let ret = [1, people[here]];
    for(const there of map[here]){
      if(comp[there] !== value) continue;
      if(visit[there]) continue;
      const temp = dfs(there, value);
      ret[0] += temp[0];
      ret[1] += temp[1];
    }
    return ret;
  }
  for(let i=1; i< (1<<n) -1; i++){
    visit = new Array(n+1).fill(0);
    comp = new Array(n+1).fill(0);
    let idx1 = -1, idx2 = -1;
    for(let j=0; j < n; j++){
      if(i & (1<<j)) {comp[j+1] = 1; idx1 = j+1;}
      else idx2 = j+1;
    }
    const comp1 = dfs(idx1, 1);
    const comp2 = dfs(idx2, 0);
    if(comp1[0] + comp2[0] === n) res = Math.min(res,Math.abs(comp1[1] - comp2[1]));
  }
  console.log(res);
}