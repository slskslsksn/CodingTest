const input = require('fs').readFileSync('BOJ15829_Hashing.txt').toString().trim().split('\n');
input.shift();

const a = 'a'.charCodeAt(0) - 1;
const m = 1234567891;
let sum = 0;
let mul = 1;
for (const c of input.shift()) {
  sum += (c.charCodeAt(0) - a) * mul;
  sum %= m;
  mul = (mul * 31) % m;
}
console.log(sum);
