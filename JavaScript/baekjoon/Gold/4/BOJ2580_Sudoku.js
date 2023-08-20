const empty = [];
const map = require('fs').readFileSync('BOJ2580_Sudoku.txt', 'utf-8').trim().split('\n').map((e, i)=>e.trim().split(' ').map((t, j) => {
  if(t === '0') empty.push([i, j]);
  return +t;
}));
// console.log(map.map(e=>e.join(' ')).join('\n'));
// console.log(empty);

const go = (idx) => {
  if(idx === empty.length){
    console.log(map.map(e=>e.join(' ')).join('\n'));
    process.exit(0);
  }
  // empty에서 idx 가져오기
  const [y, x] = empty[idx];
  // 현재 y, x, 3x3 에서 가능한 거 가져오기
  const can = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  let cnt = 9;
  for(let i=0; i<9; i++){
    const [ty, tx] = [map[y][i], map[i][x]];
    if(ty && can[ty-1]) can[ty-1] = 0, cnt--;
    if(tx && can[tx-1]) can[tx-1] = 0, cnt--;
  }
  const yy = Math.floor(y/3) * 3;
  const xx = Math.floor(x/3) * 3;
  for(let i=yy; i<=yy+2; i++){
    for(let j=xx; j<=xx+2; j++){
      const t = map[i][j];
      if(t && can[t-1]) can[t-1] = 0, cnt--;
    }
  }
  // cnt 0이면 return;
  if(!cnt) return;
  for(let i=0; i<9; i++){
    if(can[i]) {
      map[y][x] = i+1;
      go(idx+1);
      map[y][x] = 0;
    }
  }
}
go(0);
