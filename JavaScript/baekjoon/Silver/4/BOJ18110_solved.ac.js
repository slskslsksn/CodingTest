const [n, ...opinions] = require('fs').readFileSync('BOJ18110_solved.ac.txt', 'utf-8').trim().split('\n').map(Number);
if(n == 0) console.log(0);
else{
  opinions.sort((a,b)=>a-b);
  const trimAvg = Math.round(n*0.15);
  let sum = 0;
  for(let i=trimAvg; i<n-trimAvg; i++){
    sum += opinions[i];
    console.log(opinions[i]);
  }
  console.log(Math.round(sum/(n-trimAvg*2)));
}