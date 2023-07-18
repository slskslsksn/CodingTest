const input = require('fs').readFileSync('BOJ2667_NumberingComplex.txt').toString().trim().split('\n').map(e=>e.trim());
const n = +input.shift();
const map = [];
for(temp of input){
  map.push(temp.split('').map(e=>+e));
}


const dx = [1, 0, 0, -1];
const dy = [0, 1, -1, 0];

let danjiCnt = 0;
const visit = Array.from({length: n}, ()=>Array.from({length:n}, ()=>false));
const danji = [];
for(let y=0; y<n; y++){
  for(let x=0; x<n; x++){
    if(map[y][x]&& !visit[y][x]){
      ++danjiCnt;
      danji.push(go(y, x));
    }
  }
}

function go(y,x){
  let cnt = 1;
  visit[y][x] = true;
  const q = [[y,x]];
  while(q.length){
    const [nowY, nowX] = q.shift();
    for(let i=0; i<4; i++){
      const [ny, nx] = [nowY+dy[i], nowX+dx[i]];
      if(0 > ny || n <= ny || 0 > nx || n <= nx || visit[ny][nx] || !map[ny][nx]) continue;
      cnt++;
      visit[ny][nx] = true;
      q.push([ny, nx]);
    }
  }
  return cnt;
}

console.log(danjiCnt+'\n'+danji.sort((a,b)=>a-b).join('\n'));