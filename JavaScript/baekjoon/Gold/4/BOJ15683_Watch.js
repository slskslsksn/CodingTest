const input = require('fs').readFileSync('BOJ15683_Watch.txt', 'utf-8').trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const cctvs = [];
const map = input.slice(1).map((line, y) => 
  line.split(' ').map((e, x) => {
    e = +e;
    if(0<e && e<6) cctvs.push([y,x]);
    return e;
  })
);


const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];
const cctv_dir = [
  [],
  [[0],[1],[2],[3]],
  [[0, 1], [2, 3]],
  [[0, 2], [0, 3], [1, 2], [1, 3]],
  [[0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3]],
  [[0, 1, 2, 3]]
];
let res = 1e9;
const ncctvs = cctvs.length
function go(idx) {
  if(idx === ncctvs){
    let cnt = 0;
    for(let i=0; i<n; i++){
      for(let j=0; j<m; j++){
        if(map[i][j] === 0) cnt++;
      }
    }
    res = Math.min(res, cnt);
    return;
  }

  const [y, x] = cctvs[idx];
  const cctv = map[y][x];
  for(let i=0; i<cctv_dir[cctv].length; i++){
    const ncctv_dir = cctv_dir[cctv][i];
    const visit = [];
    for(let j=0; j<ncctv_dir.length; j++){
      let [ty, tx] = [y, x];
      const dir = ncctv_dir[j];
      while(1){
        const [ny, nx] = [ty+dy[dir], tx+dx[dir]];
        if(ny < 0 || ny >= n || nx < 0 || nx >= m || map[ny][nx] === 6) break;
        if(map[ny][nx] === 0){
          visit.push([ny, nx]);
          map[ny][nx] = cctv;
        }
        [ty, tx] = [ny, nx];
      }
    }
    go(idx+1);
    for(let k=0; k<visit.length; k++){
      const [ny, nx] = visit[k];
      map[ny][nx] = 0;
    }
  }
}
go(0);
console.log(res);