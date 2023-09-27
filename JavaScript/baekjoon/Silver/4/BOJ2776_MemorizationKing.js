const input = require('fs').readFileSync('BOJ2776_MemorizationKing.txt', 'utf-8').trim().split('\n');
const t = +input[0];

let res = [];
let i = 0;
while(i++ < t){
  const n = i*4;
  const arr1 = input[n-2].split(' ').map(Number).sort((a,b) => a-b);
  const arr2 = input[n].split(' ').map((e, i)=>[+e, i]).sort((a,b)=>a[0]-b[0]);
  let a1 = 0, a2 = 0;
  const an1 = arr1.length, an2 = arr2.length;
  const temp = [];
  while(1){
    if(a1>=an1 || a2>=an2){
      break;
    }

    const an = arr1[a1] - arr2[a2][0];
    if(!an){
      temp.push([1, arr2[a2][1]]);
      a2++;
    }else if(an<0 && a1<an1-1){
      a1++;
    }else{
      temp.push([0, arr2[a2][1]]);
      a2++;
    }
  }
  res.push(temp.sort((a,b)=>a[1]-b[1]).map(e=>e[0]));
}
console.log(res.map(e=>e.join('\n')).join('\n'));