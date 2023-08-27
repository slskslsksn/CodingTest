const input = require('fs').readFileSync('BOJ3273_SumOfTwoNumbers.txt', 'utf-8').trim().split('\n');
const n = +input[0];
const arr = input[1].trim().split(' ').map(Number).sort((a,b) => a-b);
const x = +input[2];

let res = 0;
let left = 0, right=n-1;
while(left<right){
  const sum = arr[left] + arr[right];
  if(sum<x) left++;
  else if(sum>x) right--;
  else res++, left++;
}
console.log(res);