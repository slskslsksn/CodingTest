let [n, m, s] = require('fs').readFileSync('BOJ5525_IOIOI.txt', 'utf-8').trim().split('\n').map(e=>e.trim());
[n, m] = [+n, +m];
const size = 2 * n + 1;
if(m < size) console.log(0);
else{
  const limit = m - size;
  let res = 0;
  for(let i=0; i<=limit; i++){
    let flag = true;
    if(s[i] === 'I'){
      let j=0;
      for(;j<size;j++){
        const c = s[i+j];
        if((j%2 && c!=='O') || (!(j%2) && c!=='I')){
          flag = false;
          break;
        }
      }
      i += j-1;
      while(flag){
        res++;
        if(s[++i] !== 'O' || s[++i] !== 'I')
          flag = false, i--;
      }
    }
  }
  console.log(res);
}