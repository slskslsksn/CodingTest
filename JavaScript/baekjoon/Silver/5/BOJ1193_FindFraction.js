let n = +require('fs').readFileSync('BOJ1193_FindFraction.txt').toString().trim();
let i = 1;
while(i<n){
  n-=i++;
}

console.log(i%2 ? `${i+1-n}/${n}` : `${n}/${i+1-n}`);