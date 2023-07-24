// const input = require('fs').readFileSync('BOJ1377_BubbleSort.txt').toString().split('\n').map((n, i) => {
//   if(i>0) return[Number(n), i-1];
// });
// input.shift();
// let m = 0;
// input.sort((a, b) => a[0]-b[0]);
// for(let i=0; i<input.length; i++){
//   m = Math.max(input[i][1] - i, m);
// }
// console.log(m+1);
// console.log(input);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let count = 0;
rl.on('line', (line) => {
  if (!count) {
    count = Number(line);
  } else {
    input.push(Number(line));
    if (input.length === count) {
      rl.close();
    }
  }
}).on('close', () => {
  const numbers = input
    .map((el, i) => {
      return {
        value: el,
        index: i,
      };
    })
    .sort((a, b) => a.value - b.value);

  let maxValue = 0;
  for (let i = 0; i < count; i++) {
    maxValue = Math.max(maxValue, numbers[i].index - i);
  }

  console.log(maxValue + 1);
});
