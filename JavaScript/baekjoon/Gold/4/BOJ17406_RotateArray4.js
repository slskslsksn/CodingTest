const input = require('fs').readFileSync('BOJ17406_RotateArray4.txt', 'utf-8').split('\n').map(e=>e.trim().split(' ').map(Number));
const [n, m, k] = input[0];
const map = input.slice(1, n+1);
const rotates = input.slice(n+1);
const visit = Array(k).fill(0);

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];
let dir = 0;
let sy, sx, ey, ex;
let res = 1e9;

const copyArray = (arr) => {
  const clone = [];
  for(const item of arr){
    if(Array.isArray(item))
      clone.push(copyArray(item));
    else
      clone.push(item);
  }
  return clone;
}

const getNext = (y, x) => {
  if(x+dx[dir] > ex || y+dy[dir] > ey || x+dx[dir] < sx) dir++;
  else if(y+dy[dir] < sy) dir = 0;
  return [y+dy[dir], x+dx[dir]];
}
const rotate = ([r, c, s], arr) => {
  r--; c--;
  // console.log(r, c, s);
  [sy, sx] = [r-s, c-s];
  [ey, ex] = [r+s, c+s];
  while(sy < ey && sx < ex ){
    // console.log(`sy: ${sy}, sx:${sx}, ey: ${ey}, ex:${ex}`);
    let [y, x] = [sy, sx];
    let [ny, nx] = [-1, -1];
    let next =0;
    let now = arr[y][x];
    while(ny !== sy || nx !== sx){
      [ny, nx] = getNext(y, x);
      next = arr[ny][nx];
      arr[ny][nx] = now;
      now = next;
      [y, x] = [ny, nx];
    }
    
    // 시작지점, 끝지점 조정
    sy++; sx++; ey--; ex--;
  }
}

const go = (arr, cnt) => {
  // console.log(cnt, visit);
  if(cnt === k){
    for(let i=0; i<n; i++){
      let sum = 0;
      for(let j=0; j<m; j++){
        sum += arr[i][j];
      }
      res = Math.min(res, sum);
    }
    return;
  }

  
  for(let i=0; i<k; i++){
    if(!visit[i]){
      visit[i] = 1;
      const temp = copyArray(arr);
      rotate(rotates[i], temp);
      // console.log(temp);
      go(temp, cnt+1);
      visit[i] = 0;
    }
  }
}

go(map, 0);
console.log(res);