const input = require('fs').readFileSync('BOJ2720_LaundryOwnerDonghyuk.txt').toString().split('\n').map((e) => +e);

const money = [25, 10, 5, 1];
const res = [];

let t = input.shift();
while (t--) {
  let c = input.shift();
  res.length = 0;
  for (const m of money) {
    const i = Math.floor(c / m);
    res.push(i);
    c -= i * m;
  }
  console.log(...res);
}
