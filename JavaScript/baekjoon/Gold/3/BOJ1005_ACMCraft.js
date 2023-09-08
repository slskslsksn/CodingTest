const input = require('fs').readFileSync('BOJ1005_ACMCraft.txt', 'utf-8').trim().split('\n');
let t = +input[0];
let res = [];
while(t--){
  const [n, k] = input.splice(1, 1)[0].trim().split(' ').map(Number);
  const condition = input.splice(1,k+2).map(e=>e.trim().split(' ').map(Number));
    const times = condition[0];
  const goal = condition[k+1][0];
  const before = new Array(n+1).fill(0);
  const visit = new Array(n+1).fill(0);
  const arr = Array.from({length: n+1}, () => []);
  const road = condition.slice(1, k+1).map((e)=>{
    before[e[1]]++;
    arr[e[0]].push(e[1]);
    return e;
  });
  const dp = new Array(n+1).fill(-1);
  const q = [];
  let idx = 0;
  for(let i=1; i<=n; i++){
    if(!before[i]) q.push(i);
  }
  while(idx<q.length){
    const now = q[idx++];
    
    if(visit[now] !== before[now]) continue;
    visit[now]++;
    if(dp[now] < 0) dp[now] = times[now-1];
    else dp[now] += times[now-1];
    
    if(now === goal){
      res.push(dp[now]);
      break;
    }
    
    for(let i=0; i<arr[now].length; i++){
      const next = arr[now][i];
      visit[next]++;
      q.push(next); 
      dp[next] = Math.max(dp[next], dp[now]);
    }
  }
}
console.log(res.join('\n'));