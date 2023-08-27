const input = require('fs').readFileSync('BOJ1389_SixDegreesofKevinBacon.txt', 'utf-8').trim().split('\n').map(e=>e.trim().split(' ').map(Number));
const [n, m] = input[0];
const map = Array.from({length: n}, () => new Array(n).fill(Infinity));

for(let i=1; i<=m; i++){
  const [s, e] = input[i].map(e=>e-1);
  map[s][e] = 1;
  map[e][s] = 1;
}

for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(i!==j){
      for(k=0; k<n; k++){
        if(j!==k){
          map[j][k] = Math.min(map[j][i]+map[i][k], map[j][k]);
        }
      }
    }
  }
}

const res = [-1, Infinity];
for(let i=0; i<n; i++){
  let cnt = 0;
  for(let j=0; j<n; j++){
    if(i!==j){
      cnt += map[i][j];
    }
  }
  if(res[1] > cnt) res[0] = i, res[1] = cnt;
}
console.log(res[0]+1);