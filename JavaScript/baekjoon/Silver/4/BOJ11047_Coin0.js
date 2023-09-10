const input = require('fs').readFileSync('BOJ11047_Coin0.txt', 'utf-8').trim().split('\n').map(e=>e.trim());
let [n, k] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number).sort((a,b)=>b-a);
let res = 0;
for(const coin of coins){
  while(coin <= k){
    k -= coin;
    res++;
  }
}
console.log(res);