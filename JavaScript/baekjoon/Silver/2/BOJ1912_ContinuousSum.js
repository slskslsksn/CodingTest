const input = require('fs').readFileSync('BOJ1912_ContinuousSum.txt', 'utf-8').trim().split('\n');
const n = +input[0];

/* 내가 푼 풀이 */
// 왼쪽까지의 최대값이랑 더한거랑 자신을 비교하면 된다고 생각했음
// const nums = [[0,0], ...input[1].split(' ').map(e=> [-1e9, +e])];
// let res = -1e9;
// for(let i=1; i<=n; i++){
//   const num = nums[i][1];
//   nums[i][0] = Math.max(num + nums[i-1][0], num + nums[i-1][1]);
//   res = Math.max(res, ...nums[i]);
// }
// console.log(res);

/* 간단한 풀이 */
// sum이 음수라면 0으로 초기화하고 다시 시작하면 됨 => 음수에 더하는거보다 자기자신이 더 크기때문
let nums = input[1].split(' ').map(Number);
let res = -1001, sum = 0;
for(let i=0; i<n; i++){
  sum += nums[i];
  res = Math.max(res, sum);
  if(sum < 0) sum = 0;
}
console.log(res);
