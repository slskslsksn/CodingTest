const N = +require('fs').readFileSync('BOJ9663_N-Queen.txt', 'utf-8').trim();
let res = 0;
const pieces = [];
const canPut = (row, col) => {
  for(const piece of pieces){
    const [y, x] = piece;
    if(row === y || col === x || Math.abs(row-y) === Math.abs(col-x)) return false;
  }
  return true;
}

const go = (row) => {
  if(row === N){
    res++;
    return;
  }
  
  for(let i=0; i<N; i++){
    if(canPut(row, i)){
      pieces.push([row, i]);
      go(row+1);
      pieces.pop();
    }
  }
}
go(0);
console.log(res);