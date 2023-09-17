const input = require('fs').readFileSync('BOJ2630_MakeColoredPaper.txt', 'utf-8').trim().split('\n');
const n = +input[0];
const arr = input.slice(1).map(e=>e.trim().split(' ').map(Number));

const res = [0, 0];
const go = (y, x, n) => {
  const num = arr[y][x];
  if(n === 1){
    res[num]++;
    return;
  }

  let flag = 0;
  for(let i=y; i<y+n && !flag; i++){
    for(let j=x; j<x+n; j++){
      if(arr[i][j] !== num){
        flag = 1;
        break;
      }
    }
  }
  if(flag){
    const n2 = n/2;
    go(y, x, n2);
    go(y+n2, x, n2);
    go(y, x+n2, n2);
    go(y+n2, x+n2, n2);
  }else{
    res[num]++;
    return;
  }
}
go(0, 0, n);
console.log(res.join('\n'));