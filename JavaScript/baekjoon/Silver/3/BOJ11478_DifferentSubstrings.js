const input = require('fs').readFileSync('test.txt', 'utf-8').trim();

const map = new Map();
const size = input.length;
for(let start=0; start<size; start++){
  for(let i=1; i<=size; i++){
    const str = input.substring(start, i);
    if(str !== '' && !map.has(str)){
      map.set(str, true);
    }
  }
}
console.log(map.size);