/*
https://dingco.notion.site/9cd5946dab694f94ba6e175b4744fdcb

# 이달의 우수사원!
원두가 근무하고 있는 회사에서 이달의 직원을 뽑아
상품을 수여하는 이벤트가 개최되었습니다.
각각의 직원들이 받은 투표의 결과가 
vote 배열에 사원 번호가 1번인 직원의 득표수부터 
순서대로 담겨 매개변수로 주어질 때,
가장 많은 표를 받은 직원의 사원 번호를 return 하는 solution 함수를 완성해 주세요.

**제한 사항**

- vote는 길이 1 이상 20 이하인 배열입니다.
- vote의 원소는 0 이상 20 이하의 number 타입입니다.
- 최다 득표자는 단 한 명 입니다.
- 직원의 사원 번호는 1부터 순서대로 공백없이 부여됩니다.
*/

function solution(vote) {
  // let top = 0;
  // for(const i in vote){
  //   top = vote[i] > vote[top] ? i : top;
  // }
  // console.log(+top+1);
  console.log(vote.indexOf(Math.max(...vote))+1);
}

solution([5, 2, 0, 1, 0]); // 1
solution([0, 0, 1, 7, 0, 4, 2]); // 4
