const score = Array(100001).fill(0);
let flag = false;
require('readline').createInterface({
  input: require('fs').createReadStream('BOJ14729_SevenWarlords.txt'),
}).on('line', (line) => {
  if(flag){
    score[(+line)*1000]++;
  }else{
    flag = true;
  }
}).on('close', ()=>{
  const res = [];
  let cnt = 0;
  for(let i=0; cnt<7; i++){
    for(let j=0; j<score[i] && cnt<7; j++){
      res.push(i);
      cnt++;
    }
  }
  console.log(res.map(e=>(e/1000).toFixed(3)).join('\n'));
})
