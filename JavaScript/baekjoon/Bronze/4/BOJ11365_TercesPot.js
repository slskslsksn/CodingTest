const input = require('fs').readFileSync('BOJ11365_TercesPot.txt').toString().trim().split('\n').map(e=>e.trim());

const answer = [];
for(const str of input){
  if(str === 'END') break;
  answer.push(str.split('').reverse().join(''));
}
console.log(answer.join('\n'));