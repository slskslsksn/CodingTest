// https://www.acmicpc.net/problem/7785
const input = require('fs').readFileSync('BOJ7786_WhoInTheOffice.txt','utf-8').trim().split('\n');
const n = +input.shift();
const set = new Set();
for(let i=0; i<n; i++){
  const [name, cmd] = input[i].trim().split(' ');
  if(cmd === 'enter') set.add(name);
  else{
    if(set.has(name)) set.delete(name);
  }
}

console.log([...set.keys()].sort((a,b)=>{
  for(let i=0; i<Math.min(a.length, b.length); i++){
    if(a[i] !== b[i]){
      return b.charCodeAt(i) - a.charCodeAt(i);
    }
  }
  if(a.length > b.length) return -1;
  return 1;
}).join('\n'));