const input = require('fs').readFileSync('BOJ11054_LongestBitonicSubSequence.txt', 'utf-8').trim().split('\n');
const N = +input[0];
const arr = input[1].split(' ').map(Number);

const up = new Array(N).fill(1), down = new Array(N).fill(1);
for(let i=0, j=N-1; i<N; i++, j--){
  for(let l=0, r=N-1;l<i || r>j; l++, r--){
    if(l < i && arr[l] < arr[i]){
      up[i] = Math.max(up[l]+1, up[i]);
    }
    if(r > j && arr[r] < arr[j]){
      down[j] = Math.max(down[r]+1, down[j]);
    }
  }
}

console.log(Math.max(...up.map((e, i) => e+down[i]-1)));