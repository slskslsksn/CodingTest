const [[n,k],...input] = require('fs').readFileSync('BOJ12865_NormalBag.txt','utf-8').trim().split('\n').map(e=>e.split(' ').map(Number));
input.unshift([0,0]);
const dp = Array.from({length:n+1}, () => new Array(k+1).fill(0));
for(let i=1; i<=n; i++){
  for(let j=1; j<=k; j++){
    const [w, v] = input[i];
    if(j < w) dp[i][j] = dp[i-1][j];
    else dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-w]+v);
  }
}
console.log(dp[n][k]);