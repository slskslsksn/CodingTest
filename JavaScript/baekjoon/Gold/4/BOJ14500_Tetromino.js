const input = require('fs').readFileSync('BOJ14500_Tetromino.txt', 'utf-8').trim().split('\n').map(e=>e.trim().split(' ').map(Number));
const [N, M] = input[0];
const map = input.slice(1);
const visit = Array.from({length: N}, () => Array.from({length: M}, () => 0));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let res = 0;
const dfs = (y, x, idx, sum) => {
  if(idx === 3){
    res = res > sum ? res : sum;
    return;
  }

  for(let i=0; i<4; i++){
    const [ny, nx] = [y + dy[i], x + dx[i]];
    if(0 <= ny && ny < N && 0 <= nx && nx < M && !visit[ny][nx]){
      if(idx===1){
        visit[ny][nx] = 1;
        dfs(y, x, idx+1, sum+map[ny][nx]);
        visit[ny][nx] = 0;
      }
      visit[ny][nx] = 1;
      dfs(ny, nx, idx+1, sum+map[ny][nx]);
      visit[ny][nx] = 0;
    }
  }
}

for(let i=0; i<N; i++){
  for(let j=0; j<M; j++){
    visit[i][j] = 1;
    dfs(i, j, 0, map[i][j]);
    visit[i][j] = 0;
  }
}
console.log(res);