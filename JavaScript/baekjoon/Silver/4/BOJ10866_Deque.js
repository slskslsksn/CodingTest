const input = require('fs').readFileSync('BOJ10866_Deque.txt').toString().trim().split('\n');
input.shift();
const arr = [];
const res = [];
for (let str of input) {
  const [cmd, n] = str.trim().split(' ');
  switch (cmd) {
    case 'push_front':
      arr.unshift(n);
      break;
    case 'push_back':
      arr.push(n);
      break;
    case 'pop_front':
      res.push(arr.shift() ?? -1);
      break;
    case 'pop_back':
      res.push(arr.pop() ?? -1);
      break;
    case 'size':
      res.push(arr.length);
      break;
    case 'empty':
      res.push(arr.length ? 0 : 1);
      break;
    case 'front':
      res.push(arr[0] ?? -1);
      break;
    case 'back':
      res.push(arr[arr.length - 1] ?? -1);
      break;
    default:
      break;
  }
}

console.log(res.join('\n'));