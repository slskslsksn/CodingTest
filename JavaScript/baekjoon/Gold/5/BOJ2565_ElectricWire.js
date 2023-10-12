const input = require('fs').readFileSync('BOJ2565_ElectricWire.txt', 'utf-8').trim().split('\n');
const n = +input[0];
const wires = input.slice(1).map(e => e.split(' ').map(Number)).sort((a,b) => a[0] - b[0]);

let cnt = 1;
const lis = new Array(n).fill(1);

for(let i=0; i<n; i++){
  for(let j=0; j<i; j++){
    if(wires[j][1] < wires[i][1] && lis[i] < lis[j]+1){
      lis[i] = lis[j]+1;
    }
  }
  cnt = Math.max(cnt, lis[i]);
}

console.log(n-cnt);