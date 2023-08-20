const input = require('fs').readFileSync('BOJ1806_Subtotal.txt', 'utf-8').trim().split('\n');
const [N, S] = input[0].trim().split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let sum = arr[0];
let left = 0, right = 0;
let res = Infinity;
while(left <= right && right < N){
  if(sum < S){
    sum += arr[++right];
  }else{
    res = Math.min(res, right-left+1);
    sum -= arr[left++];
  }
}

console.log(res === Infinity ? 0 : res);