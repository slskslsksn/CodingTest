const [n, k] = require('fs').readFileSync('BOJ1697_HideAndSeek.txt', 'utf-8').trim().split(' ').map(Number);
const line = [];
const q = [n];
line[n] = 0;
let idx = 0, i = 1;
while(idx<i){
  const now = q[idx++]
  if(now === k) break;
  for(const next of [now-1, now+1, now*2]){
    if(next<0 || next>100000 || line[next])continue;
    q[i++] = next;
    line[next] = line[now]+1;
  }
}
console.log(line[k]);