const filename = __filename.replace(__dirname + '\\', '').replace('.js', '');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./${filename}.txt`;
const input = fs.readFileSync(filePath).toString().slice(' ');
const a = parseInt(input[0]);
const b = parseInt(input[2]);
console.log(a - b);