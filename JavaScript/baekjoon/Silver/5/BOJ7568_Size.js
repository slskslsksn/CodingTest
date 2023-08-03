const input = require('fs').readFileSync('BOJ7568_Size.txt').toString().trim().split('\n').map(e=>e.trim().split(' ').map(e=>+e));
const arr = input.slice(1);
const res = [];
for(const size1 of arr){
  let grade = 1;
  for(const size2 of arr)
    if(size1 !== size2 && size1[0] < size2[0] && size1[1] < size2[1])
      grade++;
  res.push(grade);
}
console.log(...res);