const input = require('fs').readFileSync('BOJ3190_Snake.txt', 'utf-8').trim().split('\n');
const N = +input[0];
const K = +input[1];
const L = +input[2+K];

const map = Array.from({length:N+1}, () => Array.from({length:N+1}, ()=>0));
for(let i=0; i<K; i++){
  const [y, x] = input[i+2].split(' ').map(Number);
  map[y][x] = 2;
}

const dir = {
  R: {L: 'U', D: 'D'},
  L: {L: 'D', D: 'U'},
  U: {L: 'L', D: 'R'},
  D: {L: 'R', D: 'L'},
}
const next = {
  R: [0, 1],
  L: [0, -1],
  U: [-1, 0],
  D: [1, 0],
}
let current = 'R';


let rotateCnt = 0;
let rotate = input[3+K+rotateCnt].trim().split(' ');
let time = 0;
let x = 1, y = 1;
const snake = [[y, x]];
map[1][1] = 1;

while(1){
  time++;
  const [ny, nx] = next[current];
  y += ny, x += nx;
  if(y <= 0 || y > N || x <= 0 || x > N) break;
  const nextMap = map[y][x];
  if(nextMap === 1){
    break;
  }else{
    snake.push([y, x]);
    map[y][x] = 1;
    if(!nextMap){
      const [ly, lx] = snake.shift();
      map[ly][lx] = 0;
    }
  }
  if(time === +rotate[0]){
    current = dir[current][rotate[1]];
    rotateCnt++;
    if(rotateCnt < L) rotate = input[3+K+rotateCnt].trim().split(' '); 
  }
}
console.log(time);
