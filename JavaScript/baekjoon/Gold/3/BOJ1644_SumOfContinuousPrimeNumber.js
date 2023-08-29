const n = +require('fs').readFileSync('BOJ1644_SumOfContinuousPrimeNumber.txt', 'utf-8').trim();
const che = new Array(n+1).fill(1);
const arr = [];
for(let i=2; i<=n; i++){
  if(!che[i]) continue;
  arr.push(i);
  for(let j=2*i; j<=n; j+=i){
    che[j] = 0;
  }
}
let l = 0, r = 0;
let cnt = 0, sum = 0;
while(l<=r && r <= arr.length){
  if(sum <= n) sum += arr[r++];
  else sum -= arr[l++];
  if(sum === n) cnt++;
}
console.log(cnt);
