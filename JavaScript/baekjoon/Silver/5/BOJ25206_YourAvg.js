const input = require('fs').readFileSync('BOJ25206_YourAvg.txt').toString().trim().split('\n');

const GRADE = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};

let sum = 0, avg = 0;
for (const str of input) {
  const [subject, credit, grade] = str.trim().split(' ');
  if(grade === 'P') continue;
  sum += +credit;
  avg += +credit * GRADE[grade];
}
console.log(avg / sum);