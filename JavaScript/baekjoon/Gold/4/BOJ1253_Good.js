const input = require('fs')
  .readFileSync('BOJ1253_Good.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim().split(' ').map(Number));

const N = input.shift()[0];
const arr = input.shift().sort((a,b)=>a-b);
console.log(N);

const go = (n, d, s, e) => {
  console.log(n, d, s, e);
  if (s >= e) return 0;
  if (s === d || arr[s] + arr[e] < n) return go(n, d, s + 1, e);
  if (e === d || arr[s] + arr[e] > n) return go(n, d, s, e - 1);
  return 1;
};
let cnt = 0;
for (let i = 0; i < N; i++) {
  cnt += go(arr[i], i, 0, N - 1);
}
// for (let k = 0; k < N; k++) {
//   const find = arr[k];
//   let i = 0;
//   let j = N - 1;
//   while (i < j) {
//     const sum = arr[i] + arr[j];
//     if (sum === find) {
//       if (i !== k && j !== k) {
//         cnt++;
//         break;
//       } else if (i === k) {
//         i++;
//       } else if (j === k) {
//         j--;
//       }
//     } else if (sum < find) i++;
//     else j--;
//   }
// }
console.log(cnt);
