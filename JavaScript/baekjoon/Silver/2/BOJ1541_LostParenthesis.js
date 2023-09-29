const input = require('fs').readFileSync('BOJ1541_LostParenthesis.txt', 'utf-8').trim();
const token = [];
let temp = '';
for(const c of input){
  if(c === '+' || c === '-'){
    token.push(+temp);
    temp = '';
    token.push(c);
  }else{
    temp += c;
  }
}
token.push(+temp);
let idx = 0, res = 0;
while(idx < token.length){
  if(token[idx] === '+') idx++;
  else if(token[idx] === '-'){
    let sum = 0;
    for(++idx; idx<token.length; idx++){
      const n = token[idx];
      if(n === '-') break;
      if(n !== '+') sum += n;
    }
    res -= sum;
  }else res += token[idx++];
}
console.log(res);