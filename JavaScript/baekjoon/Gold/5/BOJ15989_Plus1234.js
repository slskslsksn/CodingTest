const input = require('fs').readFileSync('BOJ15989_Plus1234.txt', 'utf-8').trim().split('\n').map(Number);
const dp = new Array(10001).fill(0);
dp[0] = 1;
for(let i=1; i<=3; i++){
  for(let j=1; j<=10000; j++){
    if(j-i>=0)dp[j] += dp[j-i];
  }
}
for(let i=1; i<=input[0]; i++){
  console.log(dp[input[i]]);
}