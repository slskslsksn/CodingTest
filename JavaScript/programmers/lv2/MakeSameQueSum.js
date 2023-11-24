function solution(queue1, queue2) {
  const q = [...queue1, ...queue2];
  let l1 = 0;
  let l2 = queue1.length;
  let r1 = l2 - 1;
  let r2 = l2 + queue2.length - 1;
  let sum1 = queue1.reduce((pre, cur) => pre + cur);
  let sum2 = queue2.reduce((pre, cur) => pre + cur);
  let cnt = 0;
  let flag = false;
  while(l2 !== l1 && r1 !== r2){
    if(cnt > q.length * 3) break;
    if(sum1 === sum2) {
      flag = true;
      break;
    }

    if(sum1 < sum2){
      sum2 -= q[l2];
      l2 = (l2+1) % q.length;
      r1 = (r1+1) % q.length;
      sum1 += q[r1];
    }else{
      sum1 -= q[l1];
      l1 = (l1+1) % q.length;
      r2 = (r2+1) % q.length;
      sum2 += q[r2];
    }
    cnt++;
  }
  return flag ? cnt : -1;
}
// console.log(solution([3, 2, 7, 2],	[4, 6, 5, 1]));
// console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
console.log(solution([8,8],[2,8]));