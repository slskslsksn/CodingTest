const input = require('fs').readFileSync('BOJ14620_FlowerRoad.txt').toString().trim().split('\n');
const N = +input[0];
const arr = input.slice(1).map(e=>e.trim().split(' ').map(Number));
const visit = Array.from({length: N}, () => Array(N).fill(0));
const done = Array.from({length: N}, () => Array(N).fill(0));

let cost = Infinity;

function go(idx, sum) {
  if(idx === 3){
    cost = Math.min(cost, sum);
    return;
  }
  for(let y=1; y<N-1; y++){
    for(let x=1; x<N-1; x++){
      if(isVisit(y,x) || done[y][x]) continue;
      visit[y][x] = visit[y-1][x] = visit[y+1][x] = visit[y][x-1] = visit[y][x+1] = 1;
      go(idx+1, sum+getCost(y, x));
      visit[y][x] = visit[y-1][x] = visit[y+1][x] = visit[y][x-1] = visit[y][x+1] = 0;
      // 이미 해본자리는 다시 해볼 필요가 없음
      if(idx === 0) done[y][x] = 1;
    }
  }
}

function isVisit(y, x){
  if(visit[y][x] || visit[y-1][x] || visit[y+1][x] || visit[y][x-1] || visit[y][x+1]) return 1;
  return 0;
}

function getCost(y, x){
  return arr[y][x] + arr[y-1][x] + arr[y+1][x] + arr[y][x-1] + arr[y][x+1];
}

go(0, 0);
console.log(cost);