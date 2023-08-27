const [N, ...lines] = require('fs').readFileSync('BOJ2170_DrawLine.txt', 'utf-8').trim().split('\n').map(e=>e.trim().split(' ').map(Number));
lines.sort((a,b) => {
  if(a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
})
let l = lines[0][0], r = lines[0][1];
let res = 0;
for(let i=1; i<N[0]; i++){
  if(r < lines[i][0]){
    res += r - l;
    l = lines[i][0];
    r = lines[i][1];
  }else if(lines[i][0] <= r && r <= lines[i][1]){
    r = lines[i][1];
  }
}
res += r - l;
console.log(res);
