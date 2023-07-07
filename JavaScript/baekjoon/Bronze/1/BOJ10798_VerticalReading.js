const input = require('fs').readFileSync('BOJ10798_VerticalReading.txt').toString().trim().split('\n');
const arr = [];
let line = '';
let max = 0;
for (let i = 0; i < input.length; i++) {
  max = Math.max(max, input[i].trim().length);
  arr.push(input[i].trim().split(''));
}
for(let i=0; i<max; i++){
  for(let j=0; j<5; j++){
    if(arr[j][i])line+=arr[j][i];
  }
}
console.log(line);