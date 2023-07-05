/*
https://dingco.notion.site/90af80ea840c4fdfa81c4fb959d3ab2e

# 원두는 착한 어른이
개발자 원두는 어린이날을 맞이해
저소득층에게 간식을 전하는 봉사에 참여하기로 했습니다.
봉사단체에서는 나이대에 따라 간식을 다르게 전달합니다.
0세부터 3세까지는 “분유 스틱”을, 4세부터 7세까지는 “초콜릿과 사탕”을,
나머지는 “쿠키”를 나눠줍니다.
원두는 받아 가야 할 간식을 쉽게 구분하기 위해 나이를 입력하면
받아야 할 간식을 문자열로 return 해주는 함수를 만들기로 합니다.
나이가 age로 주어질 때, 받아 가야 할 간식을 return 하는 함수 solution을 완성해주세요.

**제한사항**
- age는 0 이상 100 이하의 number 타입입니다.
*/

function solution(age) {
  if (age <= 3) console.log('분유 스틱');
  else if (age <= 7) console.log('초콜릿과 사탕');
  else console.log('쿠키');
}

solution(7); // “초콜릿과 사탕”
solution(2); // “분유 스틱”
solution(19); // “쿠키”
