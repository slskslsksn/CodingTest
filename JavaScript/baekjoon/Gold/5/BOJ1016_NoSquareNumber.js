const [min, max] = require('fs').readFileSync('BOJ1016_NoSquareNumber.txt', 'utf-8').trim().split(' ').map(Number);
const arr = new Array(max-min+1).fill(1);
let res = max - min + 1;
let smax = Math.floor(Math.sqrt(max));
let square;
for(let i=2; i<=smax; i++){
  square = i * i;
  let t = square - min % square;
  if(square === t) t = 0;
  for(let j=t+min; j<=max; j+=square){
    if(arr[j-min]){
      arr[j-min] = 0;
      res--;
    } 
  }
}
console.log(res);