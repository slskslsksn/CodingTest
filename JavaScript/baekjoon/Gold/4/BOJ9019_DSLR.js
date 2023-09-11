const input = require('fs').readFileSync('BOJ9019_DSLR.txt', 'utf-8').trim().split('\n');
const T = +input[0];
let res = [];
for(let c = 1; c <= T; c++){
  const [A, B] = input[c].split(' ').map(Number);
  const visit = [];
  const q = [[A, '']];
  while(q.length){
    const [value, cmd] = q.shift();
    if(value === B) {
      res.push(cmd);
      break;
    }
    const d = D(value);
    const s = S(value);
    const l = L(value);
    const r = R(value);
    if(!visit[d]){
      visit[d] = 1;
      q.push([d, cmd+'D']);
    }
    if(!visit[s]){
      visit[s] = 1;
      q.push([s, cmd+'S']);
    }
    if(!visit[l]){
      visit[l] = 1;
      q.push([l, cmd+'L']);
    }
    if(!visit[r]){
      visit[r] = 1;
      q.push([r, cmd+'R']);
    }
  }
}

function D(value){
  return (value * 2) % 10000;
}

function S(value){
  return value ? value-1 : 9999;
}

function L(value){
  return (value % 1000) * 10 + Math.floor(value / 1000);
  
}

function R(value){
  return (value % 10) * 1000 + Math.floor(value / 10);
}

console.log(res.join('\n'));