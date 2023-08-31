const input = require('fs').readFileSync('BOJ1700_PowerStripScheduling.txt', 'utf-8').trim().split('\n').map(e=>e.trim().split(' ').map(Number));
const [n, k] = input[0];
const arr = input[1];
const multitap = new Array(n).fill(0);
const visit = new Array(k+1).fill(0);
let res = 0, size=0;
for(let i=0; i<k; i++){
  const num = arr[i];
  if(size === n){
    let flag = true;
    let last_idx = 0, change_idx = 0;
    for(let j=0; j<n; j++){
      const mNum = multitap[j];
      let here_idx;
      if(num === mNum){
        flag = false;
        break;
      }
      for(here_idx=i+1; here_idx<k; here_idx++){
        if(arr[here_idx] === mNum) break;
      }
      if(last_idx < here_idx){
        last_idx = here_idx;
        change_idx = j;
      }
    }
    if(flag){
      multitap[change_idx] = num;
      res++;
    }
  }else{
    if(!visit[num]){
      multitap[size++] = num;
      visit[num] = 1;
    }
  }
}

console.log(res);