const input = require('fs').readFileSync('BOJ1011_FlyMeToTheAlphaCentauri.txt', 'utf-8').trim().split('\n');
const T = +input[0];
const res = [];
let cnt = 0, sum = 0;;
for(let i=1; i<=101; i++){
  cnt++;
  sum+=i;
}
for(let i=101; i>0; i--){
  cnt++;
  sum+=i;
}
console.log(sum, cnt);
for(let i=1; i<=T; i++){
  const [x, y] = input[i].split(' ').map(Number);
  let distance = y - x;
  if(distance <= 3){
    res.push(distance);
    continue;
  }
  else{
    const n = Math.sqrt(distance);
    if(n%1 === 0){
      res.push(n*2-1);
    }else{
      const fn = Math.floor(n);
      const a = distance - fn * fn
      res.push(Math.floor(n)*2 + Math.floor(a/n));
    }
  }
}
console.log(res.join('\n'));

