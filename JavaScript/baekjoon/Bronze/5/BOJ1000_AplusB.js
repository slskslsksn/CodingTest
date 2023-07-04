// https://www.acmicpc.net/problem/1000
// const filename = __filename.slice(__dirname.length + 1).slice(0, -3);
const filename = __filename.replace(__dirname+'\\', '').replace('.js', '');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./${filename}.txt`;
let input = fs.readFileSync(filePath).toString().split(' ');

console.log(Number(input[0]) + Number(input[1]));
console.log(filename);
