const [n, ...scores] = require('fs').readFileSync('BOJ2579_GoUpStairs.txt', 'utf-8').trim().split('\n').map(Number);
scores.unshift(0);
const dp = Array.from({length: n+1}, () => new Array(2).fill(0));
dp[1][0] = scores[1], dp[1][1] = scores[1];
for(let i=2; i<=n; i++){
  dp[i][0] = Math.max(dp[i-2][0], dp[i-2][1]) + scores[i];
  dp[i][1] = dp[i-1][0] + scores[i];
}
console.log(Math.max(dp[n][0], dp[n][1]));