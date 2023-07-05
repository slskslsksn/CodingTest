/*
https://dingco.notion.site/cfc87786fed2497cae6eb713ebdd776d

# 덧셈 계산기
똑똑한 개발자 원두는 피드백을 반영하여 덧셈 계산기를 개선하려 합니다.
문자열 타입으로 된 숫자를 입력해도 제대로 작동하도록 고쳐가기로 합니다.
입력값이 num1, num2로 주어질 때
입력된 값의 합을 return하는 함수 solution을 만들어주세요.

**제한 사항**
- num1, num2의 길이는 1 이상 100 이하입니다.
- num1, num2는 문자열 또는 숫자로 표기된 숫자입니다.
*/

function solution(num1, num2) {
  console.log(+num1 + +num2);
}

solution('1', 2); // 3
solution(5, 6); // 11
solution('3', '5'); // 8
