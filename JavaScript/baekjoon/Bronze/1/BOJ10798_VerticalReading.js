const input = require('fs').readFileSync('BOJ10798_VerticalReading.txt').toString().trim().split('\n').map(e=>e.trim().split(''));
let line = '';
while(true){
  let x = 0;
  for(let i =0; i<5; i++){
    const c = input[i].shift();
    if(!c) x++;
    else line += c;
  }
  if(x===5) break;
}
console.log(line);
// const arr = [];
// let line = '';
// let max = 0;
// for (let i = 0; i < input.length; i++) {
//   max = Math.max(max, input[i].trim().length);
//   arr.push(input[i].trim().split(''));
// }
// for(let i=0; i<max; i++){
//   for(let j=0; j<5; j++){
//     if(arr[j][i])line+=arr[j][i];
//   }
// }
// console.log(line);