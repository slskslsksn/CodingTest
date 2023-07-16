const input = require('fs').readFileSync('BOJ5430_AC.txt').toString().trim().split('\n').map(e=>e.trim());
let n = +input.shift();
const answer = [];
while(n--){
  let [cmd, k, arr] = input.splice(0, 3);
  arr = arr.slice(1,-1).split(',');
  let isReverse = false;
  let isError = false;
  for(const c of cmd ){
    if(c === 'R'){
      isReverse = !isReverse;
    }
    else {
      if(k === '0' || arr.length === 0) {
        isError = true;
        break;
      }else{
        if(isReverse) arr.pop();
        else arr.shift();
      }
    }
  }
  if(isReverse) arr.reverse();
  answer.push(isError ? 'error' : `[${arr.join(',')}]`)
}
console.log(answer.join('\n'));