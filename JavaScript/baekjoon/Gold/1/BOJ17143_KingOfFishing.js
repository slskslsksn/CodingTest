const input = require('fs').readFileSync('BOJ17143_KingOfFishing.txt', 'utf-8').trim().split('\n');
const [r, c, m] = input[0].split(' ').map(Number);
let sharks = [];

let map = Array.from({length: r}, () => []);
let dy = [-1, 1, 0, 0];
let dx = [0, 0, 1, -1];

class Shark{
  constructor(y, x, speed, direction, size, idx){
    this.y = y-1;
    this.x = x-1;
    // this.speed = speed;
    this.speed = direction <=2 ? speed % (2*(r-1)) : speed % (2*(c-1));
    this.direction = direction-1;
    this.size = size;
    this.idx = idx;
  }
}

for(let i=1; i<=m; i++){
  const temp = input[i].split(' ').map(Number);
  const shark = new Shark(...temp, i-1);
  sharks[i-1] = shark;
  map[shark.y][shark.x] = shark;
}

let res = 0;
for(let i=0; i<c; i++){
  fishing(i);
  map = moveSharks();
}
console.log(res);
function fishing(x){
  for(let y=0; y<r; y++){
    const shark = map[y][x];
    if(shark){
      res += shark.size;
      sharks[shark.idx] = null;
      break;
    }
  }
}

function moveSharks(){
  let temp = Array.from({length: r}, () => []);
  for(const shark of sharks){
    if(shark){
      getSharkPos(shark);
      const [y, x] = [shark.y, shark.x];
      if(temp[y][x]){
        temp[y][x] = compareShark(temp[y][x], shark);
      }else{
        temp[y][x] = shark;
      }
    }
  }
  return temp;
}

function getSharkPos(shark){
  let y = shark.y;
  let x = shark.x;
  let s = shark.speed;
  let d = shark.direction;
  let ny, nx;
  while(1){
    ny = y + s * dy[d];
    nx = x + s * dx[d];
    if(0<=nx && nx<c && 0<=ny && ny<r) break;
    if(d>1){
      if(nx < 0){
        s -= x;
        x = 0;
      }else {
        s -= c - x - 1;
        x = c - 1;
      }
    }else{
      if(ny < 0){
        s -= y;
        y = 0;
      }else {
        s -= r - y - 1;
        y = r-1;
      }
    }
    d ^= 1;
  }
  // console.log('before', shark)
  shark.y = ny;
  shark.x = nx;
  shark.direction = d;
  // console.log('after', shark)
}

function compareShark(a, b){
  let smallShark = a;
  let bigShark = b;
  if(a.size > b.size){
    smallShark = b;
    bigShark = a;
  }
  sharks[smallShark.idx] = null;
  return bigShark;
}