const [n, r, c] = require('fs').readFileSync('BOJ1074_Z.txt', 'utf-8').trim().split(' ').map(Number);

let res = 0;
function Z(y, x, size){
  if(y===r && x === c){
    console.log(res);
    process.exit(0);
  }

  if(r < y + size && y <= r && c < x + size && x <= c){
    const divSize = size/2;
    Z(y, x, divSize);
    Z(y, x+divSize, divSize);
    Z(y+divSize, x, divSize);
    Z(y+divSize, x+divSize, divSize);
  }else{
    res += size * size;
  }
}

Z(0, 0, 2**n);