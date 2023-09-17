const [[n, l], ...arr] = require('fs')
  .readFileSync('BOJ14890_Ramp.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));
let res = 0;

const go = (arr) => {
  let flag = true;
  let pre = arr[0];
  const visit = [];
  outer: for(let i=1; i<n; i++){
    const now = arr[i];
    const diff = Math.abs(now - pre);
    if(diff > 1){
      flag = false;
      break outer;
    }else{
      if(diff){
        const h = Math.min(pre, now);
        const isPre = h === pre;
        let next = isPre ? i-1 : i+1; 
        const getNext = () => (isPre ? next-- : next++);
        const canNext = () => 0 <= next && next < n;
        let ramp = 0;
        if(!isPre){
          visit[i] = 1;
          ramp++;
        }
        while(ramp < l){
          if(!canNext() || arr[next] !== h || visit[next]){
            flag = false;
            break outer;
          }
          visit[next] = 1;
          ramp++;
          getNext();
        }
      }
      pre = now;
    }
  }
  return flag;
}

for (let start = 0; start < n; start++) {
  let flagX = go(arr[start]);
  let arrY = [];
  for(let i=0; i<n; i++){
    arrY[i] = arr[i][start];
  }
  let flagY = go(arrY);
  if(flagX) res++;
  if(flagY) res++;
}
console.log(res);

