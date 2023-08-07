const input = require('fs').readFileSync('BOJ1107_RemoteControl.txt').toString().trim().split('\n').map(e=>e.trim());
const [N, M] = [input[0], +input[1]];
const buttons = Array(10).fill(1);
let res = Math.abs(N-100);
if(res >  N.length && M !== 10){
  if(M){
    const breakButton = input[2].split(' ').map(Number);
    for(const i of breakButton){
      buttons[i] = 0;
    }
  }
  go('', 0);
}
function go(channel, cnt){
  if(cnt >= res) return;
  if(channel === N){
    res = Math.min(res, cnt);
    return;
  }
  if(channel.length !== 0){
    const comp = Math.abs(+N - +channel);
    go(N, cnt+comp);
  }
  if(channel.length <= N.length){
    for(let i=0; i<10; i++){
      if(buttons[i]){
        go(channel+i, cnt+1);
      }
    }
  }
}
console.log(res);

// let cnt = 0;
// function goToChannel(){
//   const size = input[0].length;
//   let channel = '';
//   for(let i=0; i<size; i++){
//     const n = +input[0][i];
//     let near = -1;
//     let min = 5000000;
//     for(let j=0; j<buttons.length; j++){
//       if(buttons[j]){
//         const temp = Math.min(min, comp(channel+j))
//         console.log(channel, j, temp);
//         if(temp < min){
//           min = temp;
//           near = j;
//         }else{
//           break;
//         }
//       }
//     }
//     channel += near;
//     cnt++;
    
//   }
//   cnt += Math.abs(+input[0] - +channel);
// }

// function comp(channel){
//   const size = channel.length;
//   for(let i=0; i<input[0].length-size; i++){
//     channel+='0';
//   }
//   return Math.abs(+input[0] - +channel)
// }

// console.log(cnt);