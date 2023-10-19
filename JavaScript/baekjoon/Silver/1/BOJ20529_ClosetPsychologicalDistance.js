const input = require('fs').readFileSync('BOJ20529_ClosetPsychologicalDistance.txt', 'utf-8').trim().split('\n');
const t = +input[0];
let idx = 1;
const res = [];
while(idx <= t*2){
  const n = +input[idx++];
  const mbti = input[idx++].trim().split(' ');
  res.push(go(n, mbti));
}
console.log(res.join('\n'));

function go(n, mbti){
  if(n>32) return 0;
  let dist = 1e9;
  const l = mbti.length;
  for(let i=0; i<l-2; i++){
    for(let j=i+1; j<l-1; j++){
      for(let k=j+1; k<l; k++){
        const [a, b, c] = [mbti[i], mbti[j], mbti[k]];
        if(a === b && b === c) return 0;
        let cnt = 0;
        cnt += cmp(a, b);
        cnt += cmp(a, c);
        cnt += cmp(b, c);
        dist = Math.min(dist, cnt);
      }
    }
  }
  return dist;
}

function cmp(a, b){
  let cnt = 0;
  for(let i=0; i<4; i++){
    if(a[i] !== b[i]) cnt++;
  }
  return cnt;
}