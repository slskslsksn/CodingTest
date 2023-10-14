const input = require('fs').readFileSync('BOJ2042_GetPrefixSum.txt', 'utf-8').trim().split('\n');
const [n, m, k] = input[0].split(' ').map(Number);
const arr = [0n];
const presum = [0n];

for(let i=1; i<=n; i++){
  arr[i] = BigInt(input[i]);
}
const Mid = (a, b) => Math.floor((a+b)/2);

const init = (start, end, index) => {
  if(start === end){
    presum[index] = arr[start];
    return presum[index];
  }
  const mid = Mid(start, end);
  presum[index] = init(start, mid, index * 2) + init(mid+1, end, index * 2 + 1);
  return presum[index];
}

const getSum = (start, end, index, left, right) => {
  if(left > end || right < start) return 0n;
  if(left <= start && right >= end) return presum[index];
  const mid = Mid(start, end);

  return getSum(start, mid, index * 2, left, right) + getSum(mid+1, end, index * 2 + 1, left, right);
}

const update = (start, end, index, where, value) => {
  if(where < start || where > end) return;
  presum[index] += value;
  if(start === end) return;
  const mid = Mid(start, end);

  update(start, mid, index*2, where, value);
  update(mid+1, end, index*2+1, where, value);

}

init(1, n, 1);
const cmd = input.slice(n).map(e=>e.trim().split(' ').map((v, i) => {
  if(i < 2) return +v;
  return BigInt(v);
}));
let res = [];
for(let i=n+1; i<input.length; i++){
  let [a, b, c] = input[i].split(' ');
  b = +b;
  switch(a){
    case '1':
      c = BigInt(c);
      const diff = c - arr[b];
      arr[b] = c;
      update(1, n, 1, b, diff);
      break;
    case '2':
      res.push(getSum(1, n, 1, b, +c));
      break;
  }
}
console.log(res.join('\n'));