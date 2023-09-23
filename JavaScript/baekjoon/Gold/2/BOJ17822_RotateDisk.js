const input = require('fs').readFileSync('BOJ17822_RotateDisk.txt', 'utf-8').trim().split('\n').map(e=>e.split(' ').map(Number));
const [n, m, t] = input[0];
const arr = input.slice(1, n+1);
const rotates = input.slice(n+1);

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const search = () => {
  const visit = [];
  let sum = 0, scnt = 0;
  let flag = false;
  for(let i=0; i<n; i++) visit[i] = [];
  for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
      if(!arr[i][j] || visit[i][j]) continue;
      const num = arr[i][j];
      sum += num;
      scnt++;
      visit[i][j] = 1;
      const q = [[i, j]];
      let qs = 1, qi = 0;
      let cnt = 0;
      arr[i][j] = 0;
      while(qi < qs){
        const [y, x] = q[qi++];
        // console.log(y, x);
        for(let k=0; k<4; k++){
          let [ny, nx] = [y+dy[k], x+dx[k]];
          if(nx === -1) nx = m-1;
          else if(nx === m) nx = 0;
          if(0<=ny && ny<n && 0<=nx && nx<m && !visit[ny][nx] && arr[ny][nx] === num){
            flag = true;
            arr[ny][nx] = 0;
            visit[ny][nx] = 1;
            q[qs++] = [ny, nx];
            cnt++;
          }
        }
      }
      if(!cnt) arr[i][j] = num;
    }
  }
  if(!flag){
    const avg = sum / scnt;
    for(let i=0; i<n; i++){
      for(let j=0; j<m; j++){
        const num = arr[i][j];
        if(num){
          arr[i][j] = num > avg ? num-1 : num < avg ? num+1 : num;
        }
      }
    }
  }
}

for(const [x, d, k] of rotates){
  for(let i=x; i<=n; i+=x){
    let idx = i-1;
    const temp = [];
    if(d){
      temp.push(...arr[idx].slice(k));
      temp.push(...arr[idx].slice(0, k));
    }else{
      temp.push(...arr[idx].slice(-k));
      temp.push(...arr[idx].slice(0, -k));
    }
    arr[idx] = temp;
  }
  search();
}
let res = 0;
for(let i=0; i<n; i++){
  for(let j=0; j<m; j++){
    res += arr[i][j];
  }
}
console.log(res);