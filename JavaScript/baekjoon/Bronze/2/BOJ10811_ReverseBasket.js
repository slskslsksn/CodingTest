//  https://www.acmicpc.net/problem/10811
const input = require('fs').readFileSync('BOJ10811_ReverseBasket.txt').toString().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input.shift().trim().split(' ').map(Number);
const arr = [];
for(let i =0; i<N; i++){
  arr.push(i+1);
}
for(let t = 0; t<M; t++){
  const [i, j] = input[t].trim().split(' ').map(Number);
  reverse(i-1, j-1);
}

function reverse(s, e){
  if(s >= e) return;
  [arr[s], arr[e]] = [arr[e],arr[s]];
  reverse(s+1, e-1);
}

console.log(...arr);