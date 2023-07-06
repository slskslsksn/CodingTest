const input = require('fs').readFileSync('BOJ1316_GroupWordChecker.txt').toString().trim().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input.shift();
const arr = new Array(26);
const a = 'a'.charCodeAt(0);
let cnt = 0;
while (N--) {
  const str = input.shift().trim();
  let no = false;
  let prev = str[0];
  arr.fill(0);
  for (const c of str) {
    if (prev === c) continue;
    if (arr[c.charCodeAt(0) - a]) {
      no = true;
      break;
    }
    arr[prev.charCodeAt(0) - a] = 1;
    prev = c;
  }
  if (!no) cnt++;
}
console.log(cnt);
