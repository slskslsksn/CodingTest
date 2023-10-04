const input = require('fs').readFileSync('BOJ14940_EasyShortDist.txt', 'utf-8').trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
let start;
const map = input.slice(1).map((line, y)=>line.split(' ').map((e,x)=> {
  e = +e;
  if(e === 2) start = [y, x];
  return e;
}))
const visit = [];
for(let i=0; i<n; i++){
  visit[i] = [];
  for(let j=0; j<m; j++){
    visit[i][j] = -1;
  }
}

const q = [start];
const dy = [0, 0, 1, -1];
const dx = [1, -1, 0, 0];
let now = 0, qi = 1;
visit[start[0]][start[1]] = 0;
while(now < qi){
  const [y, x] = q[now++];
  for(let i=0; i<4; i++){
    const [ny, nx] = [y+dy[i], x+dx[i]];
    if(0<=ny && ny<n && 0<=nx && nx<m && visit[ny][nx]<0 && map[ny][nx]){
      q[qi++] = [ny, nx];
      visit[ny][nx] = visit[y][x] + 1;
    }
  }
}


for(let y=0; y<n; y++){
  for(let x=0; x<m; x++){
    if(!map[y][x]) visit[y][x] = 0;
  }
}

console.log(visit.map(e=>e.join(' ')).join('\n'));