const input = require('fs').readFileSync('BOJ2745_BaseConversion.txt').toString().trim().split(' ');
const num = input.shift().split('').reverse().join('');
const base = +input.shift();
const ccode = 'A'.charCodeAt(0);

let res = 0;
for (let i = 0; i < num.length; i++) {
  let temp = +num[i];
  if (isNaN(temp)) {
    temp = num[i].charCodeAt(0) - ccode + 10;
  }
  res += temp * base ** i;
}
console.log(res);
