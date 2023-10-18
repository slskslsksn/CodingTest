const [[n,m], arr] = require('fs').readFileSync('BOJ2343_GuitarLesson.txt', 'utf-8').trim().split('\n').map(e=>e.split(' ').map(Number));

let max = arr.reduce((acc, value) => acc+value, 0);
let min = 0

const check = (mid) => {
  for(let i=0; i<n; i++) if(arr[i] > mid) return false;
  const temp = mid;
  let cnt = 0;
  for(let i=0; i<n; i++){
    if(mid - arr[i] < 0){
      mid = temp;
      cnt++;
    }
    mid -= arr[i];
  }
  if(mid !== temp) cnt++;
  return cnt <= m;
}

let res = Infinity;
while(min <= max){
  const mid = Math.floor((max+min)/2);
  if(check(mid)){
    max = mid-1;
    res = mid;
  }else{
    min = mid+1;
  }
}
console.log(res);
