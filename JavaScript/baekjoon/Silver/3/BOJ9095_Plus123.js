const input = require('fs').readFileSync('test.txt').toString().trim().split('\n').map(e=>+e.trim());
const t = input.shift();
const arr = new Array(t+1).fill(0);
arr[1] = 1;
arr[2] = 2;
arr[3] = 4;
for(let i=4; i< 11; i++){
  arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
}
for(let i=0; i<t; i++){
  console.log(arr[input[i]]);
}