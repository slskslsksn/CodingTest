const [[n, m], ...input] = require('fs').readFileSync('BOJ11724_NumberOfLinks.txt', 'utf-8').trim().split('\n').map(e=>e.split(' ').map(Number));
const arr = [], visit = [];
for(const [s,e] of input){
  if(!arr[s]) arr[s] = [];
  if(!arr[e]) arr[e] = [];
  arr[s].push(e);
  arr[e].push(s);
}
let res = 0;
for(let i=1; i<=n; i++){
  if(arr[i] && !visit[i]){
    res++;
    const q = [i];
    visit[i] = 1;
    let idx = 0, size = 1;
    while(idx < size){
      const now = q[idx++];
      for(let j=0; arr[now] && j<arr[now].length; j++){
        const next = arr[now][j];
        if(!visit[next]){
          visit[next] = 1;
          q[size++] = next;
        }
      }
    }
  }else if(!arr[i] && !visit[i]){
    res++;
    visit[i] = 1;
  }
}
console.log(res);