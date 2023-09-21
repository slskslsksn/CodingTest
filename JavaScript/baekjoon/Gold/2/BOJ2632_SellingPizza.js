const input = require('fs').readFileSync('BOJ2632_SellingPizza.txt', 'utf-8').trim().split('\n');
const goal = +input[0];
let [m, n] = input[1].split(' ').map(Number);

const a = input.slice(2, 2+m).map(Number);
const b = input.slice(2+m).map(Number);
a.push(...a);
b.push(...b);
m += m;
n += n;

const psum_a = [0];
const psum_b = [0];

for(let i=0; i<m; i++){
  psum_a[i+1] = psum_a[i] + a[i];
}
for(let i=0; i<n; i++){
  psum_b[i+1] = psum_b[i] + b[i];
}


const cnta = [], cntb = [];

make(m/2, psum_a, cnta);
make(n/2, psum_b, cntb);
function make(to, psum, cnt){
  for(let interval = 1; interval <= to; interval++){
    for(let start = interval; start < to+interval; start++){
      const sum = psum[start] - psum[start-interval];
      if(!cnt[sum]) cnt[sum] = 0;
      cnt[sum]++;
      if(interval === to) break;
    }
  }
}
let res = (cnta[goal] | 0) + (cntb[goal] | 0);
for(let i=1; i<goal; i++){
  res += (cnta[i] | 0) * (cntb[goal-i] | 0);
}
console.log(res);
