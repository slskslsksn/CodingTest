const input = require('fs').readFileSync('BOJ21736_HeonnaegiNeedsFriends.txt', 'utf-8').trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const visit = Array.from({length: n}, ()=>[]);
let start;
const arr = input.slice(1).map((l, y)=>l.trim().split('').map((e, x)=>{
  if(e === 'I'){
    start = [y, x];
    visit[y][x] = 1;
  }
  return e;
}));

let dy = [1, -1, 0, 0];
let dx = [0, 0, -1, 1];

let q = [start];
let now = 0; qi = 1;
let res = 0;
while(now<qi){
  const [y, x] = q[now++]
  for(let i=0; i<4; i++){
    const [ny, nx] = [y+dy[i], x+dx[i]];
    if(0 <= ny && ny < n && 0 <= nx && nx < m && !visit[ny][nx] && arr[ny][nx] !== 'X'){
      console.log(ny, nx);
      q[qi++] = [ny, nx];
      visit[ny][nx] = 1;
      if(arr[ny][nx] === 'P') res++;
    }
  }
}

console.log(res ? res : 'TT');