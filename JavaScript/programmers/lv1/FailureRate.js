function solution(N, stages) {
  const answer = [];
  const failureRate = [];
  let arrival = stages.length;
  let stage = 1;
  stages.sort((a,b) => a-b);
  let cnt = 0;
  for(let i=0; i<stages.length; i++){
    const currentStage = stages[i];
    if(currentStage > stage){
      failureRate.push(cnt / arrival);
      arrival -= cnt;
      cnt = 0;
      i--;
      stage++;
    }else{
      cnt++;
    }
  }
  if(cnt){
    failureRate.push(cnt / arrival);
  }
  console.log(failureRate);
  for(let i=0; i<N; i++){
    answer.push(i+1);
  }
  answer.sort((a,b)=>failureRate[b-1] - failureRate[a-1]);
  return answer;
}

// console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4,4,4,4]));