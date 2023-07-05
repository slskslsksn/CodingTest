// https://www.acmicpc.net/problem/2444
const input = +require('fs').readFileSync('BOJ2444_PrintStar7.txt').toString();
// const input = +require('fs').readFileSync('dev/stdin').toString();

const max = input * 2 - 1;
for (let i = 1; i <= max; i++) {
  let temp = '';
  const space = Math.abs(input - i);
  for (let j = 0; j < space; j++) temp += ' ';
  for (let j = 0; j < max - space * 2; j++) temp += '*';
  console.log(temp);
}
