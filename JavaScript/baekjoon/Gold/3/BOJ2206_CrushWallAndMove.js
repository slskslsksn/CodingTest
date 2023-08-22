const input = require('fs').readFileSync('BOJ2206_CrushWallAndMove.txt','utf-8').trim().split('\n');
const [N, M] = input[0].trim().split(' ').map(Number);
const arr = Array.from({length: N+1}, () => Array(M+1).fill(0));
const visit = Array.from({length: N+1}, () => Array.from({length: M+1}, () => Array(2).fill(0)));
for(let i=1; i<=N; i++){
  const line = input[i].trim().split('').map(Number);
  for(let j=1; j<=M; j++){
    arr[i][j] = line[j-1];
  }
}
const dy = [0, 0, 1, -1];
const dx = [1, -1, 0, 0];

function go(){
  const q = [];
  q.push([1,1,0]);
  visit[1][1][0] = 1;
  let idx = 0;
  while(idx < q.length){
    const [y,x,w] = q[idx++];
    if(y === N && x === M) return visit[y][x][w];
    for(let i=0; i<4; i++){
      const [ny, nx] = [y+dy[i], x+dx[i]];
      if(0<ny && ny<=N && 0<nx && nx<=M && !visit[ny][nx][w]){
        if(arr[ny][nx] && w === 0) {
          q.push([ny, nx, 1]);
          visit[ny][nx][1] = visit[y][x][w] + 1;
        }
        else if(!arr[ny][nx]){ 
          q.push([ny, nx, w]);
          visit[ny][nx][w] = visit[y][x][w] + 1;
        }
      }
    }
  }
  return -1;
}
console.log(go());