// https://www.acmicpc.net/problem/10810
// const filename = __filename.slice(__dirname.length + 1).slice(0, -3);
const filename = __filename.replace(__dirname + '\\', '').replace('.js', '');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./${filename}.txt`;
let input = fs.readFileSync(filePath).toString().split('\n');
const inputN = +input[0].split(' ')[0];
const inputM = +input[0].split(' ')[1];
const inputPuts = [];
for (let i = 1; i < input.length; i++) {
  const temp = [];
  const puts = input[i].trim().split(' ');
  for (let j = 0; j < 3; j++) {
    temp.push(puts[j]);
  }
  inputPuts.push(temp);
}

const solution = (N, M, puts) => {
  const basket = Array(N).fill('0');
  while(M--){
    for(const now of puts){
      for(let i=now[0]-1; i<now[1]; i++){
        basket[i] = now[2];
      }
    }
  }
  let basketString = '';
  for(const i of basket){
    basketString += i + ' ';
  }
  return basketString;
}

console.log(solution(inputN, inputM, inputPuts));