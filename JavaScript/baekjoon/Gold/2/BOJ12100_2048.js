const input = require('fs').readFileSync('BOJ12100_2048.txt', 'utf-8').split('\n');
const N = +input[0];
let map = input.slice(1).map(e=>e.trim().split(' ').map(Number));
let res = 0;
const getMap = (dir, arr) => {
  const temp = Array.from({length: N}, () => new Array(N).fill(0));
  let y, x;
  if(dir === 'UP'){
    for(x = 0; x<N; x++){
      let idx = 0;
      temp[idx][x] = arr[idx][x];
      for(y = 1; y<N; y++){
        let num = arr[y][x];
        if(num){
          if(temp[idx][x] === 0){
            temp[idx][x] = num;
          }
          else if(temp[idx][x] === num){
            temp[idx++][x] += num;
          }else{
            temp[++idx][x] = num;
          }
        }
      }
    }
  }else if(dir === 'DOWN'){
    for(x = 0; x<N; x++){
      let idx = N-1;
      temp[idx][x] = arr[idx][x];
      for(y = N-2; y>=0; y--){
        let num = arr[y][x];
        if(num){
          if(temp[idx][x] === 0){
            temp[idx][x] = num;
          }
          else if(temp[idx][x] === num){
            temp[idx--][x] += num;
          }else{
            temp[--idx][x] = num;
          }
        }
      }
    }
  }else if(dir === 'LEFT'){
    for(y = 0; y<N; y++){
      let idx = 0;
      temp[y][idx] = arr[y][idx];
      for(x = 1; x<N; x++){
        let num = arr[y][x];
        if(num){
          if(temp[y][idx] === 0){
            temp[y][idx] = num;
          }
          else if(temp[y][idx] === num){
            temp[y][idx++] += num;
          }else{
            temp[y][++idx] = num;
          }
        }
      }
    }
  }else{
    for(y = 0; y<N; y++){
      let idx = N-1;
      temp[y][idx] = arr[y][idx];
      for(x = idx-1; x>=0; x--){
        let num = arr[y][x];
        if(num){
          if(temp[y][idx] === 0){
            temp[y][idx] = num;
          }
          else if(temp[y][idx] === num){
            temp[y][idx--] += num;
          }else{
            temp[y][--idx] = num;
          }
        }
      }
    }
  }
  return temp;
}
const go = (cnt, arr, t2) => {
  if(cnt === 5){
    for(let y=0; y<N; y++){
      for(let x=0; x<N; x++){
        res = Math.max(res, arr[y][x]);
      }
    }
    return;
  }
  // 위로
  go(cnt+1, getMap('UP', arr));
  // 아래로
  go(cnt+1, getMap('DOWN', arr));
  // 왼쪽으로
  go(cnt+1, getMap('LEFT', arr));
  // 오른쪽으로
  go(cnt+1, getMap('RIGHT', arr));

}
go(0, map);
console.log(res);