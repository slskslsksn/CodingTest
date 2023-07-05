//https://www.acmicpc.net/problem/5622

// const input = require('fs').readFileSync('BOJ5622_Dial.txt').toString();
const input = require('fs').readFileSync('dev/stdin').toString();

const dial = {
  2: ['A', 'B', 'C'],
  3: ['D', 'E', 'F'],
  4: ['G', 'H', 'I'],
  5: ['J', 'K', 'L'],
  6: ['M', 'N', 'O'],
  7: ['P', 'Q', 'R', 'S'],
  8: ['T', 'U', 'V'],
  9: ['W', 'X', 'Y', 'Z'],
}

let num = 0;
for(const c of input){
  for(let i = 2; i<=9; i++){
    if(dial[i].includes(c)){
      num+= i+1;
      break;
    }
  }
}
console.log(num);
