const [x, y] = require('fs').readFileSync('BOJ1072_Game.txt', 'utf-8').trim().split(' ').map(Number);
let WR = Math.floor(((y/x)+Number.EPSILON)*100);
let res = -1;
let l=1, r=x;
while(l<=r){
  const mid = Math.floor((l+r)/2);
  const wr = Math.floor((y+mid) / (x+mid) * 100);
  if(wr === WR){
    l = mid + 1;
  }else{
    res = mid;
    r = mid -1;
  }
}
console.log(res);
