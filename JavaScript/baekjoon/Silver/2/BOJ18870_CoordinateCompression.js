const input = require('fs').readFileSync('BOJ18870_CoordinateCompression.txt').toString().trim().split('\n');
const coor = input[1].trim().split(' ').map((v, i) => [+v, i]).sort((a,b)=>a[0]-b[0]);
let pre = coor[0][0];
for(let i=0, j=0; i<+input[0]; i++){
  if(coor[i][0] === pre) coor[i][0] = j;
  else {
    pre = coor[i][0];
    coor[i][0] = ++j;
  }
}
coor.sort((a,b)=>a[1]-b[1]).map(e=>e[0]).join(' ');
console.log(coor.sort((a,b)=>a[1]-b[1]).map(e=>e[0]).join(' '));
