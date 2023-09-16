const n = +require('fs').readFileSync('BOJ17626_FourSquares.txt', 'utf-8');
const dp = [0, 1];
for(let i=2; i<=n; i++){
  let m = 1e9;
  for(let j=1; j*j<=i; j++){
    let tmp = i - j * j;
    m = Math.min(m, dp[tmp]);
  }
  dp[i] = m+1;
}

console.log(dp[n]);
