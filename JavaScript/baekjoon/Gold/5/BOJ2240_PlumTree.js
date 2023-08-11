const input = require('fs').readFileSync('BOJ2240_PlumTree.txt', 'utf-8').trim().split('\n');
const [t, w] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);
const dp = Array.from({length: t}, () => Array.from({length: 2}, () => Array.from({length: w+1}, () => -1)))
const go = (idx, tree, cnt) => {
  if(cnt < 0) return -1e9;
  if(idx === t) return cnt === 0 ? 0 : -1e9;

  const res = dp[idx][tree][cnt];
  if(~res) return res;
  dp[idx][tree][cnt] = Math.max(go(idx+1, tree^1, cnt-1), go(idx+1, tree, cnt)) + (tree === arr[idx] -1)
  console.log(dp);
  return dp[idx][tree][cnt];
}
console.log(Math.max(go(0, 1, w-1), go(0, 0, w)));
console.log(dp);