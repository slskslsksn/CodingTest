const input = require('fs').readFileSync('BOJ2563_ColorPaper.txt')
              .toString().trim().split('\n')
              .map((e)=>{
                return e.trim().split(' ').map(Number);
              });

const max = input.shift()[0] * 100;
const arr = new Array(100).fill(0).map(()=>new Array(100).fill(0));
let sum = 0;
for(const coor of input){
  const [x, y] = coor;
  for(let i=x; i<x+10; i++){
    for(let j=y; j<y+10; j++){
      if(arr[i][j]) continue;
      arr[i][j] = 1;
      sum++;
    }
  }
}
console.log(sum);