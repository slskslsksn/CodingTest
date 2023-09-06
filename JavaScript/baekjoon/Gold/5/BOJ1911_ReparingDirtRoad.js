const [[n, plank], ...roads] = require('fs').readFileSync('BOJ1911_ReparingDirtRoad.txt', 'utf-8').trim().split('\n').map(e=>e.trim().split(' ').map(Number));
roads.sort((a,b)=>{return a[0]-b[0];})

let res = 0;
let left = roads[0][0];
let right = roads[0][1];
for(let i=1; i<n; i++){
  const [l, r] = roads[i];
  if(!isOk(l)){
    res += getNum(right-left);
    left = l;
  }
  right = r;
}

res += getNum(right-left);
console.log(res);

function isOk(l){
  const size = right-left;
  let num = getNum(size);
  const length = (num * plank) - size;
  if(right+length >= l) return true;
  return false;
}

function getNum(size){
  let num = Math.floor(size/plank);
  if(size%plank) num++;
  return num;
}