// https://www.acmicpc.net/problem/10813
const filename = __filename.replace(__dirname + '\\', '').replace('.js', '');

const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : `./${filename}.txt`;

const inputLines = fs.readFileSync(filepath).toString().split('\n');
let [N, M] = inputLines[0].split(' ').map(Number);
const input = [];
for (let i = 1; i < inputLines.length; i++) {
  input.push(inputLines[i].trim().split(' ').map(Number));
}

const solution = () => {
  const basket = [];
  for (let i = 0; i < N; i++) {
    basket[i] = i + 1;
  }
  for (const change of input) {
    const [a, b] = [change[0] - 1, change[1] - 1];
    [basket[a], basket[b]] = [basket[b], basket[a]];
  }
  return basket;
};
console.log(...solution());
