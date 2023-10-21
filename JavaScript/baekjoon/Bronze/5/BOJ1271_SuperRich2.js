const [n, m] = require('fs').readFileSync('BOJ1271_SuperRich2.txt', 'utf-8').trim().split(' ').map(BigInt);
console.log((n/m).toString())
console.log((n%m).toString());