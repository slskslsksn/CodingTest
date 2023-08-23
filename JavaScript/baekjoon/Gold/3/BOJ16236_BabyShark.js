const input = require('fs').readFileSync('BOJ16236_BabyShark.txt', 'utf-8').trim().split('\n');
const N = +input[0];
let sx, sy;
const arr = [];
const fishes = Array.from({length: 7}, () => []);
for(let i=1; i<=N; i++){
  const line = input[i].trim().split(' ');
  arr.push([]);
  for(let j=0; j<N; j++){
    const num = +line[j];
    arr[i-1][j] = num;
    if(num === 9) [sy, sx] = [i-1, j];
    else if(num > 0) fishes[num].push([i-1, j]);

  }
}
arr[sy][sx] = 0;
let size = 2;
let eatCnt = 0;

const dy = [-1, 0, 0, 1];
const dx = [0, -1, 1, 0];
let res = 0;

const canEat = (_y, _x) => {
  const visit = Array.from({length: N}, () => Array(N).fill(-1));
  visit[_y][_x] = 0;
  const q = [];
  q.push([_y, _x]);
  const can = [];
  let step = Infinity;
  while(q.length){
    const [y, x] = q.shift();
    if(visit[y][x] > step) break;
    for(let i=0; i<4; i++){
      const [ny, nx] = [y+dy[i], x+dx[i]];
      if(ny<0 || ny>=N || nx<0 || nx>=N) continue;
      if(visit[ny][nx] !== -1 || arr[ny][nx] > size) continue;
      if(arr[ny][nx] && arr[ny][nx] < size && visit[y][x] + 1 <= step){
        step = visit[y][x] + 1;
        can.push([ny, nx]);
      }
      visit[ny][nx] = visit[y][x] + 1;
      q.push([ny, nx]);
    }
  }
  if(step !== Infinity) {
    can.sort((a, b) => {
      if(a[0] !== b[0]) return a[0]-b[0];
      return a[1]-b[1];
    })
    sy = can[0][0];
    sx = can[0][1]
    arr[sy][sx] = 0;
    eatCnt++;
    return step;
  }
  sy = -1;
  return 0;
}

while(sy!==-1){
  res += canEat(sy, sx);
  if(eatCnt === size){
    size++;
    eatCnt = 0;
  }
}

console.log(res);