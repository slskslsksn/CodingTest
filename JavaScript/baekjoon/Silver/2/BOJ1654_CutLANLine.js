const input = require('fs')
  .readFileSync('BOJ1654_CutLANLine.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim().split(' ').map((e) => +e));

const [K, N] = input.shift();
const arr = input.join(' ').split(' ').map((e) => +e);
let prev = 0, now = 0, less = 0, more = 0;
let cnt = 0, res = 0;

for (const n of arr) 
  if (n > more)  more = now = n;

const go = () => {
  if (prev === now) return;

  cnt = 0;

  for (const n of arr) cnt += Math.floor(n / now);

  if (cnt < N) more = now;
  else  res = less = now;

  prev = now;
  now = Math.ceil((more + less) / 2);

  go();
};

go();

console.log(res);
