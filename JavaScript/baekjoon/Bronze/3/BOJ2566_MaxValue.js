const input = require('fs').readFileSync('BOJ2566_MaxValue.txt').toString().trim().split('\n');

let max = 0,
  idx1,
  idx2;
for (const i in input) {
  const temp = input[i]
    .trim()
    .split(' ')
    .map((e) => +e);
  for (const j in temp) {
    if (max <= temp[j]) {
      max = temp[j];
      [idx1, idx2] = [+i + 1, +j + 1];
    }
  }
}
console.log(max);
console.log(idx1, idx2);
