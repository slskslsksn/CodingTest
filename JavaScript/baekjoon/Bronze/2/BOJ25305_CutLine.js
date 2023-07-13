const input = require('fs').readFileSync('BOJ25305_CutLine.txt').toString().trim().split('\n');
const [n, k] = input.shift().trim().split(' ').map(e=>+e);
const arr = input.shift().trim().split(' ').map(e=>+e);
arr.sort((a,b)=>b-a);
console.log(arr[k-1]);