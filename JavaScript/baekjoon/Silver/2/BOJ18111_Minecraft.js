const input = require('fs').readFileSync('BOJ18111_Minecraft.txt', 'utf-8').trim().split('\n');
let [n, m, b] = input[0].split(' ').map(Number);
let low = 1e9; high = -1e9;
const arr = input.slice(1).map(line=>line.split(' ').map((e)=>{
  e = +e;
  low = Math.min(low, e);
  high = Math.max(high, e);
  return e;
}));

let res = {time: 1e9, height: low};
if(low === high){
  res.time = 0;
}
for(let i=low; i<=high; i++){
  work(i);
}

function work(height){
  let time = 0;
  let temp = b;
  for(let y=0; y<n; y++){
    for(let x=0; x<m; x++){
      const now = arr[y][x];
      if(now < height){
        const block = height - now;
        temp -= block;
        time += block;
      }else if(now > height){
        const block = now - height;
        temp += block;
        time += block * 2;
      }
    }
  }

  if(temp < 0) return;

  if(time <= res.time){
    res.time = time;
    res.height = height;
  }
}
console.log(res.time, res.height);