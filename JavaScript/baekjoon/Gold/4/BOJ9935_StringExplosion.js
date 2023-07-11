const input = require('fs').readFileSync('BOJ9935_StringExplosion.txt').toString().trim().split('\n');
let str = input.shift().trim().split('');
const bomb = input.shift().trim();
const stack = [];

const isBomb = () => {
  for (let i = 0; i < bomb.length; i++) {
    if (stack[stack.length - bomb.length + i] !== bomb[i]) return false;
  }
  return true;
};

for (c of str) {
  stack.push(c);
  if (stack.length >= bomb.length && isBomb()) {
    for (const b of bomb) {
      stack.pop();
    }
  }
}

if (!stack.length) console.log('FRULA');
else console.log(stack.join(''));
