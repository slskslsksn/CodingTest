const input = require('fs').readFileSync('BOJ14627_GreenOnionChicken.txt', 'utf-8').trim().split('\n');
const [s, c] = input[0].split(' ').map(Number);

let max = 0;
let sum = 0;
const arr = input.slice(1).map(e=> {
  const n = +e;
  max = Math.max(max, n);
  sum += n;
  return n;
})

const check = (size) => {
  let cnt = 0;
  for(let i=0; i<s; i++){
    cnt += Math.floor(arr[i] / size);
    if(cnt > c) break;
  }
  return cnt >= c;
}

let l=1, r=max, res=0;
while(l<=r){
  let mid = Math.floor((l+r)/2);
  if(check(mid)){
    res = sum - Math.floor(mid * c);
    l = mid + 1;
  }else{
    r = mid - 1;
  }
}
console.log(res);





// BigInt 버전으로 안해도 됐음
// let max = 0n;
// let sum = 0n;
// const arr = input.slice(1).map(e=> {
//   const num = BigInt(+e);
//   max = max >= num ? max : num;
//   sum += num;
//   return num;
// })

// const check = (size) => {
//   let cnt = 0n;
//   for(let i=0; i<s; i++){
//     cnt += arr[i] / size;
//     if(cnt > c) break;
//   }
//   if(cnt < c) return false;
//   else return true;
// }

// let l=1n, r=max;
// let res = 0n;
// while(l<=r){
//   const mid = (l+r) / 2n;
//   if(check(mid)){
//     res = sum - (mid * BigInt(c));
//     l = mid + 1n;
//   }else{
//     r = mid - 1n;
//   }
// }

// console.log(res.toString());