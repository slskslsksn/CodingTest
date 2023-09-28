const [[n, m], men, women] = require('fs').readFileSync('BOj1727_MakeCouple.txt', 'utf-8').trim().split('\n').map(e=>e.split(' ').map(Number));
men.sort((a,b) => a-b);
women.sort((a,b) => a-b);

const dp = Array.from({length: n+1}, () => new Array(m+1));
dp[0][0] = 0;
for(let i=1; i<=n; i++){
  for(let j=1; j<=m; j++){
    dp[i-1][j-1] = dp[i-1][j-1] | 0;
    const temp = dp[i-1][j-1] + Math.abs(men[i-1] - women[j-1]);
    if(i===j) dp[i][j] = temp;
    else if(i>j) dp[i][j] = Math.min(dp[i-1][j], temp);
    else dp[i][j] = Math.min(dp[i][j-1], temp);
  }
}
console.log(dp[n][m]);



