const input = require('fs').readFileSync('BOJ17144_GoodByeFineDust.txt', 'utf-8').trim().split('\n').map(e=>e.trim());
const [R, C, T] = input[0].split(' ').map(Number);

let s1=0, s2=0;
let res = 0;
const dust = [];
const filter1 = [], filter2 = [];
const map = input.slice(1).map((e, y)=>e.split(' ').map((v, x)=>{
  v = +v;
  if(v > 0){
    dust.push([y, x]);
    res += v
  }else if(v === -1){
    if(s1) s2 = [y, x];
    else s1 = [y, x];
  }
  return v;
}))

function getFilter(){
  let ty = s1[0]-1, tx = s1[1];
  while(ty!==s1[0] || tx!==s1[1]){
    filter1.push([ty, tx]);
    if(tx === 0 && ty > 0) ty--;
    else if(tx < C-1 && ty === 0) tx++;
    else if(tx === C-1 && ty < s1[0]) ty++;
    else tx--;
  }
  ty = s2[0]+1, tx = s2[1]
  while(ty!==s2[0] || tx!==s2[1]){
    filter2.push([ty, tx]);
    if(tx === 0 && ty < R-1) ty++;
    else if(tx < C-1 && ty === R-1) tx++;
    else if(tx === C-1 && ty > s2[0]) ty--;
    else tx--;
  }
}
getFilter()

function moveDust(){
  res -= map[filter1[0][0]][filter1[0][1]];
  res -= map[filter2[0][0]][filter2[0][1]];
  let i=0;
  for(i=0; i<filter1.length-1; i++){
    const [y, x] = filter1[i];
    const [ny, nx] = filter1[i+1];
    map[y][x] = map[ny][nx];
  }
  const [y, x] = filter1[filter1.length-1];
  map[y][x] = 0;
  for(i=0; i<filter2.length-1; i++){
    const [y, x] = filter2[i];
    const [ny, nx] = filter2[i+1];
    map[y][x] = map[ny][nx];
  }
  const [y2, x2] = filter2[filter2.length-1];
  map[y2][x2] = 0;
}

function isAirCleaner(y, x){
  return (y === s1[0] && x === s1[1]) ||(y === s2[0] && x === s2[1])
}

const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];
function spreadDust(){
  const tempMap = Array.from({length: R}, () => new Array(C).fill(0));
  for(let y=0; y<R; y++){
    for(let x=0; x<C; x++){
      if(map[y][x] >= 5){
        const n = Math.floor(map[y][x] / 5);
        let cnt = 0;
        for(let i=0; i<4; i++){
          const [ny, nx] = [y+dy[i], x+dx[i]];
          if(0 <= ny && ny < R && 0 <= nx && nx < C && !isAirCleaner(ny, nx)){
            tempMap[ny][nx] += n;
            cnt++;
          }
        }
        tempMap[y][x] -= cnt * n;
      }
    }
  }
  for(let y=0; y<R; y++){
    for(let x=0; x<C; x++){
      if(!isAirCleaner(y, x)){
        map[y][x] += tempMap[y][x];
      }
    }
  }
}

for(let i=0; i<T; i++){
  spreadDust();
  moveDust();
}
console.log(res);