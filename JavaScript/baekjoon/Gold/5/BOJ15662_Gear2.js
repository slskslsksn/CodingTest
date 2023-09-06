const input = require('fs').readFileSync('BOJ15662_Gear2.txt', 'utf-8').trim().split('\n');
const t = +input[0];
const gears = input.slice(1, t+1).map(e=>e.trim().split('').map(Number));
// console.log(gears.map(e=>e.join(' ')).join('\n'));
// const k = +input[t+1];
const rotates = input.slice(t+2).map(e=>e.trim().split(' ').map(Number));
function search(start, dir){
  const rotateQ = [];
  let left = start, right = start;
  let lflag = true, rflag = true;

  // true: 시계방향, flase: 반시계방향
  let leftDir, rightDir;
  if(dir>0) leftDir = rightDir = false;
  else leftDir = rightDir = true;
  rotateQ.push([start, !leftDir]); 
  while(lflag || rflag){
    if(lflag){
      const nextLeft = left-1;
      if(nextLeft<0 || gears[left][6] === gears[nextLeft][2]){
        lflag = false;
      }
      else {
        rotateQ.push([nextLeft, leftDir]);
        left = nextLeft;
        leftDir = !leftDir;
      }
    }
    if(rflag){
      const nextRight = right+1;
      if(nextRight>=t || gears[right][2] === gears[nextRight][6]){
        rflag = false;
      }
      else {
        rotateQ.push([nextRight, rightDir]);
        right = nextRight;
        rightDir = !rightDir;
      }
    }
  }
  // console.log(rotateQ);
  return rotateQ;
}

function rotateGear(rotateQ){
  for(const [number, dir] of rotateQ){
    let temp = [];
    if(dir){
      // 시계방향이므로 마지막이 맨 앞으로 옴
      temp.push(gears[number].pop());
      temp.push(...gears[number].slice());
    }else{
      // 반시계방향이므로 처음이 마지막으로 감
      temp.push(...gears[number].slice(1));
      temp.push(gears[number][0]);
    }
    gears[number] = temp;
  }
}

for(const [number, dir] of rotates){
  rotateGear(search(number-1, dir));
}

let res = 0;
for(const gear of gears){
  if(gear[0])res++;
}
// console.log('\n\n\n\n\n');
console.log(res);
// console.log(gears.map(e=>e.join(' ')).join('\n'));



// const rotates = input.slice(t+2).map(e=>e.trim().split(' ').map((e,i)=>{
//   if(i) return e > 0 ? true : false;
//   return (+e)-1;
// }));
// let res = 0;

// function rotate(num, dir){
//   if(dir) gears[num].unshift(gears[num].pop());
//   else gears[num].push(gears[num].shift());
// }

// function findR(num){
//   for(let i=num; i<t-1; i++){
//     if(gears[i][2] === gears[i+1][6]) return i;
//   }
//   return t-1;
// }

// function findL(num){
//   for(let i=num; i; i--){
//     if(gears[i][6] === gears[i-1][2]) return i;
//   }
//   return 0;
// }

// for(const [num, dir] of rotates){
//   const l = findL(num);
//   const r = findR(num);
//   let d = dir;
//   for(let pos=num; pos>=l; pos--){
//     rotate(pos, d);
//     d = !d;
//   }
//   d = !dir;
//   for(let pos=num+1; pos<=r; pos++){
//     rotate(pos, d);
//     d = !d;
//   }
// }

// for(let i=0; i<t; i++) if(gears[i][0]) res++;
// console.log(res);
// // console.log(gears.map(e=>e.join(' ')).join('\n'));