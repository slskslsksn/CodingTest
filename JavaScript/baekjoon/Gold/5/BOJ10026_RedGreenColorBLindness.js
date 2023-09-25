const input = require('fs').readFileSync('BOJ10026_RedGreenColorBLindness.txt', 'utf-8').trim().split('\n');
const n = +input[0];
const map = input.slice(1).map(e=>e.trim());
const visit = [];
const resetVisit = () => {
  for(let i=0; i<n; i++){
    visit[i] = [];
  }
}

const dy = [-1 , 1, 0, 0];
const dx = [0, 0, -1, 1];

let d = 0;
const go = (y, x, color) => {
  visit[y][x] = 1;
  for(let i=0; i<4; i++){
    const [ny, nx] = [y+dy[i], x+dx[i]];
    if(0<=ny && ny<n && 0<=nx && nx<n && !visit[ny][nx]){
      if(color === 'Y'){
        if(map[ny][nx] === 'R' || map[ny][nx] === 'G'){
          go(ny, nx, color);
        }
      }
      else if(color === map[ny][nx]){
        go(ny, nx, color);
      }
    }
  }
}

resetVisit();
let cnt = 0, res = [];
for(let y=0; y<n; y++){
  for(let x=0; x<n; x++){
    if(!visit[y][x]){
      go(y, x, map[y][x]);
      cnt++;
    }
  }
}
res.push(cnt);
cnt = 0;
resetVisit();
for(let y=0; y<n; y++){
  for(let x=0; x<n; x++){
    if(!visit[y][x]){
      if(map[y][x] === 'R' || map[y][x] === 'G'){
        go(y, x, 'Y');
      }else{
        go(y, x, 'B');
      }
      cnt++;
    }
  }
}
res.push(cnt);
console.log(res.join(' '));