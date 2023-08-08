const input = require('fs').readFileSync('BOJ12904_AAndB.txt', 'utf-8').trim().split('\n').map(e=>e.trim());
let [S, T] = input;

let res = 0;
while(S !== T){
  const size = T.length;
  if(size < S.length){
    break;
  }
  
  if(T[size-1] === 'A') {
    T = T.slice(0, -1);
  }else if(T[size-1] === 'B'){
    T = T.split('').reverse().join('').slice(1);
  }
  
  if(S === T){
    res = 1;
    break;
  }
}
console.log(res);
