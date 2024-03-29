/*
https://dingco.notion.site/18e3d26373564720b8f4071251e9b189

# 계산기가 이상해
개발자 원두는 회사에서 덧셈 계산기를 만들어오라는 업무를 지시받았습니다.
하지만 만들어간 덧셈 계산기는 제대로 작동하지 않았고
선배에게 피드백으로 ‘문자열은 숫자로 변환해야지!’라는 말을 듣게 됩니다.
그래서 원두는 계산기에 입력된 값이 어떤 타입인지 확인하는 함수를 만들어보려 합니다.
입력값이 num1과 num2로 주어질 때 입력된 값이
각각 어떤 타입인지를 return하는 함수 solution을 만들어주세요.

**제한 사항**

- num1, num2의 길이는 1 이상 100 이하입니다.
- num1, num2는 문자열 또는 숫자로 표기된 숫자입니다.
*/

function solution(num1, num2) {
  console.log(`${typeof num1} ${typeof num2}`)
  }
  
  solution("9", 10); // string number
  solution(19, 1); // number number
  solution("2", "14"); // string string