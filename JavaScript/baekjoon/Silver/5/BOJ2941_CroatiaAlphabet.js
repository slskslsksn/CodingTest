// https://www.acmicpc.net/problem/2941
const input = require('fs').readFileSync('BOJ2941_CroatiaAlphabet.txt').toString().trim();
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

// let count = 0;
let str = input;
for (const word of croatian) {
  // if(!input.includes(word)) continue;
  // const size = str.length;
  // str = str.split(word).join('');
  // count += (size - str.length)/word.length;
  str = str.replaceAll(word, ' ');
}
// console.log(count + str.length);
console.log(str.length);
