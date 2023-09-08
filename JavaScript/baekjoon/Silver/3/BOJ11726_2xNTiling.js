// const n = +require('fs').readFileSync('/dev/stdin', 'utf-8').trim();
const n = 8;
const dp = [1, 1];

for(let i=2; i<=n; i++){
  dp[i] = (dp[i-1] + dp[i-2])%10007;
}

console.log(dp[n]);