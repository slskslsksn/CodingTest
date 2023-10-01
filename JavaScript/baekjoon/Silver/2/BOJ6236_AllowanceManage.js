const input = require('fs').readFileSync('BOJ6236_AllowanceManage.txt', 'utf-8').trim().split('\n');
const [n,m] = input[0].split(' ').map(Number);
let lo=0, hi=0;
const arr = input.slice(1).map((e) => {
  e = +e;
  lo = Math.max(lo, e);
  hi += e;
  return e;
});

const check = (mid) => {
  let temp = mid;
  let cnt = 0;
  for(let i=0; i<n; i++){
    if(cnt > m) return false;
    if(temp - arr[i] < 0){
      temp = mid;
      cnt++;
    }
    temp -= arr[i];
  }
  if(temp !== mid) cnt++;
  return cnt <= m;
}

let res = Infinity;
while(lo<=hi){
  const mid = Math.floor((lo+hi)/2);
  if(check(mid)){
    res = mid;
    hi = mid-1;
  }else{
    lo = mid+1;
  }
}

console.log(res);