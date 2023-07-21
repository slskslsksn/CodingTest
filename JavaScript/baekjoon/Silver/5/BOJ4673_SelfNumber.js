const arr = new Array(10001).fill(false);

for(let i=1; i<=10000; i++){
  let j = i;
  let sum = j;
  while(j){
    sum += j%10;
    j = Math.floor(j / 10);
  }
  if(sum <= 10000) arr[sum] = true;
}

for(let i=1; i<=10000; i++){
  if(!arr[i]) console.log(i);
}