/*
https://dingco.notion.site/c0b6cedb41254815ba253c129863f0f4

# 회원님 잠시 따라와 주시죠
개발자 원두는 회원들로부터
서비스 이용 동의 리스트를 받아오는 업무를 담당하게 되었습니다.
서비스 이용에 동의하는 회원에게는 “Yes”,
서비스 이용에 동의하지 않는 회원에게는 “No”를 각각 입력받아야 하는데
어떠한 에러로 인해서 “Yes”를 선택한 회원으로부터는 숫자 1을,
“No”를 선택한 회원으로부터는 숫자 0을 받아오는 상황이 발생했습니다.
개발자 원두는 좀 더 직관적으로 회원들의 동의 여부를 알고 싶어서
숫자 1이 입력된 회원은 동의했다는 의미의 “Yes”,
숫자 0이 입력된 회원은 동의하지 않았다는 의미의 ”No”로 바꾸어 리스트를 재구성하려고 합니다.
회원들의 동의 여부가 담겨 있는 숫자 배열 **list**가 매개변수로 주어질 때,
회원들의 동의 여부를 “Yes” 또는 “No”로 바꾸어 구성된 배열을 return 하는
solution 함수를 완성하세요.

**제한 사항**
- list는 길이 2 이상, 20 이하의 배열입니다.
- list의 원소는 1 또는 0의 정수만 들어옵니다.
- return 값의 결과는 “Yes” 또는 “No”로 구성된 배열이어야 합니다.
*/

function solution(list) {
  // console.log(list.map((it) => (it ? 'Yes' : 'No')));
  const arr = [];
  for (const i of list) {
    arr.push(i ? 'Yes' : 'No');
  }
  console.log(arr);
}

solution([1, 0, 0, 1]);
// ["Yes", "No", "No", "Yes"]
solution([1, 1, 1, 1, 0, 1]);
// ["Yes", "Yes", "Yes", "Yes", "No", "Yes"]
