function solution(alp, cop, problems) {
  let targetAlp = 0, targetCop = 0;
  const tempProb = [[0,0,0,1,1],[0,0,1,0,1]];
  for(const problem of problems){
    const [alpReq, copReq, alpRwd, copRwd] = problem;
    targetAlp = Math.max(targetAlp, alpReq);
    targetCop = Math.max(targetCop, copReq);
    if(alpRwd !== 0 || copRwd !== 0) tempProb.push(problem);
  }
  if(targetAlp <= alp && targetCop <= cop) return 0;
  if(targetAlp < alp) alp = targetAlp;
  if(targetCop < cop) cop = targetCop;
  if(problems.length === 1){
    return (targetCop - cop) + (targetAlp - alp);
  }
  problems = tempProb;
  const dp = Array.from({length: targetAlp + 1}, () => new Array(targetCop + 1).fill(Infinity));
  dp[alp][cop] = 0;
  for(let i=alp; i<=targetAlp; i++){
    for(let j=cop; j<=targetCop; j++){
      if(dp[i][j] === Infinity) continue;
      if(i === targetAlp && j === targetCop) break;
      for(const [alpReq, copReq, alpRwd, copRwd, cost] of problems){
        if (i >= alpReq && j >= copReq) {
            const alpSum = Math.min(i + alpRwd, targetAlp);
            const copSum = Math.min(j + copRwd, targetCop);
            dp[alpSum][copSum] = Math.min(dp[alpSum][copSum], dp[i][j] + cost);
        }
    }    
    }
  }
  return dp[targetAlp][targetCop];
}

console.log(solution(10,10,	[[10,15,2,1,2],[20,20,3,3,4], [0, 0, 0, 0, 1]]));
// console.log(solution(	0, 0, [[0, 0, 2, 1, 2], [4, 5, 3, 1, 2], [4, 11, 4, 0, 2], [10, 4, 0, 4, 2]]));
// console.log(
//   solution(0, 0, [
//     [0, 0, 30, 2, 1],
//     [150, 150, 30, 30, 100],
//   ])
// );

// console.log(
//   solution(0, 0, [
//     [4, 3, 1, 1, 100],
//     [0, 0, 2, 2, 1],
//   ])
// );


// console.log(solution(1, 1, [
//   [0, 2, 1, 1, 100],
// ]));

// console.log(solution(2, 2, [
//   [1, 1, 1, 1, 100],
// ]));

// console.log(solution(10, 10, [
//   [0, 0, 5, 5, 1],
//   [30, 10, 1, 1, 100],
// ]));

// console.log(solution(0,0,[
//   [0, 0, 1, 1, 1],
//   [150, 150, 1, 1, 100],
// ]));

// console.log(solution(1, 1, [[0, 2, 1, 1, 100]]));