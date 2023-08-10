const n = +require('fs').readFileSync('BOJ1038_DecreasingNumber.txt', 'utf-8');

let res = -1;
const isDecrease = (num) => {
  for(let i=0; i<num.length-1; i++){
    if(num[i] <= num[i+1]) return i;
  }
  return -1;
}

const getNext = (num) => {
  let arr = num.split('').map(Number);
  while(1){
    let idx = isDecrease(arr.join(''));
    if(idx === -1) return +arr.join('');
    arr[idx]++;
    if(idx === 0 && arr[idx] === 10) {
      arr = arr.join('').split('');
      idx = -1;
    }
    for(let i=arr.length-1; i>idx; i--){
      arr[i] = arr.length - i - 1;
    }
  }
}

if(n<=10) res = n;
else{
  let cnt = 10;
  for(let i = 20;;){
    if(i > 9876543210){
      break;
    }
    if(isDecrease(i+'') === -1) [cnt, i] = [cnt+1, i+1];
    else i = getNext(i+'');
    if(cnt === n){
      res = i-1;
      break;
    }
  }
}
console.log(res);