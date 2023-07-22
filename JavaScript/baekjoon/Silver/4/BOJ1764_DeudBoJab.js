const input = require('fs').readFileSync('BOJ1764_DeudBoJab.txt').toString().split('\n').map((e) => e.trim());
const [n, m] = input.shift().split(' ').map(Number);
const d = new Map();
for (let i = 0; i < n; i++) {
  d.set(input[i], true);
}
let cnt = 0;
const res = [];
for (let i = n; i < n + m; i++) {
  const b = input[i];
  if (d.has(b)) {
    cnt++;
    res.push(b);
  }
}
res.sort();
console.log(cnt+'\n'+res.join('\n'));