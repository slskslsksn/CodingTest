const input = require('fs').readFileSync('BOJ2470_TwoSolutions.txt').toString().split('\n');
const n = +input[0].trim();
let min = 0, max = 0;
const solutions = input[1].split(' ').map((v) => {
  v = +v;
  if(v < 0) min = min < v ? min : v;
  else max = max > v ? max : v;
  return v;
}).sort((a,b) => a-b);
if(!min) console.log(solutions[0], solutions[1]);
else if(!max) console.log(solutions[n-2], solutions[n-1]);
else{
  let left = 0;
  let right = n-1;
  const res = {sum: Number.MAX_SAFE_INTEGER, left: solutions[left], right: solutions[right]};
  let sum =0;
  while(left !== right){
    sum = solutions[left] + solutions[right];
    if(Math.abs(sum) < res.sum){
      res.sum = Math.abs(sum);
      res.left = solutions[left];
      res.right = solutions[right];
    }
    if(sum === 0) break;
    if(sum > 0) right--;
    else left++;
  }
  console.log(res.left, res.right);
}

// else {
//   const res = go({score: 999999999999, left: 0, right: 0}, 0, n-1);
//   function go(best, left, right){
//     if(left === right) return [best.left, best.right];
//     const now = solutions[left] + solutions[right];
//     if(now === 0) return [left, right];
//     if(Math.abs(now) < best.score){
//       best.score = Math.abs(now);
//       best.left = left;
//       best.right = right;
//     }
//     if(now < 0) return go(best, left+1, right);
//     else return go(best, left, right-1);
//   }
//   console.log(solutions[res[0]], solutions[res[1]]);
// }
