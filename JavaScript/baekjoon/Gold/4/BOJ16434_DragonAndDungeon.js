const input = require('fs').readFileSync('BOJ16434_DragonAndDungeon.txt', 'utf-8').trim().split('\n').map(e=>e.split(' ').map(Number));
let [n, atk] = input[0];

atk = BigInt(atk);
let hp = 1n;
let res = 0n;
for(let idx=1; idx<=n; idx++){
  const [t, a, h] = input[idx].map(BigInt);
  if(t == 1){
    let hit = h/atk;
    if(hit * atk < h){
      hit += 1n;
    }
    hp += (hit - 1n) * a;
  }else{
    atk += a;
    hp = hp - h > 1 ? hp - h : 1n;
  }
  res = res > hp ? res : hp;
}
// console.log(Number(res)); // BigInt를 Number로 바꾸는 바보같은 짓을 했음
console.log(res.toString()); 


// 시간초과
// const check = (mid) => {
//   let mxHP = mid;
//   let init_atk = atk;
//   for(let i=1; i<=n; i++){
//     const [t, a, h] = input[i];
//     if(t == 2){
//       mid = Math.min(mxHP, mid + h);
//       init_atk += a;
//     }else{
//       mid -= (Math.ceil(h / init_atk) - 1) * a;
//     }
//     if(mid <= 0) return false;
//   }
//   return true;
// }

// let l=1, r=1e19;
// let res = 1;
// while(l<=r){
//   const mid = Math.floor((l+r)/2);
//   if(check(mid)){
//     r = mid-1;
//     res = mid;
//   }else{
//     l = mid+1;
//   }
// }
// console.log(res);

// 시간초과
// const check = (mid) => {
//   let mxHP = mid;
//   let init_atk = BigInt(atk);
//   for(let i=1; i<=n; i++){
//     const [t, a, h] = input[i].map(e=>BigInt(e));
//     if(t == 2){
//       mid = mxHP < mid + h ? mxHP : mid + h;
//       init_atk += a;
//     }else{
//       mid -= BigInt(Math.ceil(Number(h) / Number(init_atk)) - 1) * a;
//     }
//     if(mid <= 0) return false;
//   }
//   return true;
// }

// let l=1n, r=BigInt(1e18);
// let res = 1;
// while(l<=r){
//   const mid = BigInt(Math.floor(Number((l+r)/2n)));
//   if(check(mid)){
//     r = mid-1n;
//     res = mid;
//   }else{
//     l = mid+1n;
//   }
// }
// console.log(Number(res));

//  JavaScript에서는 그리디로 안되는듯 똑같은 코드를 작성해도 안됨
// let hp = 1;
// let res = 0;
// for(let idx=1; idx<=n; idx++){
//   const [t, a, h] = input[idx];
//   if(t == 1){
//     hp += (Math.ceil(h / atk) - 1) * a;
//   }else{
//     atk += a;
//     hp = Math.max(1, hp - h);
//   }
//   res = Math.max(res, hp);
// }
// console.log(res);