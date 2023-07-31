const input = require('fs').readFileSync('BOJ1759_CreatePassword.txt').toString().trim().split('\n').map((e) => e.trim().split(' '));
const [l, c] = input.shift().map(Number);
let lastVowel = -1;
const sorted = input.shift().sort((a, b) => (a < b ? -1 : 1)).map((e, idx) => {if (isVowel(e)) lastVowel = idx; return e;});
let res = '';

for(let i=0; i<=c-l; i++){
  if(i > lastVowel) break;
  go(i, '');
}

function go(idx, str) {
  str += sorted[idx];
  if(str.length === l && haveTwo(str)){
    for(let i=0; i<l; i++){
      if(isVowel(str[i])){
        res += str + '\n';
        return;
      }
    }
  }

  for(let i=idx; i<c-1; i++){
    if(c-i+str.length < l) return;
    go(i+1, str);
  }
}

function isVowel(c) {
  switch (c) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}

function haveTwo(str){
  let cnt = 0;
  for(let i=0; i<l; i++){
    if(!isVowel(str[i])) cnt++;
    if(cnt === 2) return true;
  }
  return false;
}

console.log(res);