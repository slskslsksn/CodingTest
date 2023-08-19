const input = require('fs').readFileSync('BOJ11404_Floyd.txt', 'utf-8').trim().split('\n');
const n = +input[0];
const m = +input[1];
const map = Array.from({length: n+1}, () => Array.from({length: n+1}, () => 1e9));
for(let i=1; i<=n; i++){
  map[i][i] = 0;
}
for(let i=2; i<m+2; i++){
  const [s, e, c] = input[i].trim().split(' ').map(Number);
  if(map[s][e] !== 1e9){
    map[s][e] = Math.min(map[s][e], c);
  }else{
    map[s][e] = c;
  }
}

for(let k=1; k<=n; k++){
  for(let i=1; i<=n; i++){
    if(i === k) continue;
    for(let j=1; j<=n; j++){
      if(i === j) continue;
      map[i][j] = Math.min(map[i][k] + map[k][j], map[i][j]);
    }
  }
}

let res = [];
for(let i=1; i<=n; i++){
  res.push(map[i].slice(1).map(e=>e===1e9 ? 0 : e).join(' ')); 
}
console.log(res.join('\n'));