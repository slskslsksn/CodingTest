/*
https://dingco.notion.site/84e5aa8a155b4f67a10c1d4c6cdab1b2
# 원두의 이력서
개발자가 되고 싶은 원두는 A회사에 이력서를 넣었습니다.
그런데 주변 동료들의 추천으로 B회사로 이력서를 변경하고자 합니다.
원두가 희망했던 회사 ****a**, 변경하고자 하는 회사 **b**가 매개변수로 주어질 때
let을 이용해 ***company***라는 변수명으로 a를 할당하여 선언한 후에
b로 재할당한 후 company 변수를 return하는 함수 solution을 완성하세요.

**제한 사항**
- a는 2글자 이상 10글자 이하의 문자열 타입입니다.
- b는 2글자 이상 10글자 이하의 문자열 타입입니다.
- return 값으로 사용되는 company 변수명은 변경되어선 안 됩니다.
- company 변수의 최종값은 b 매개변수가 담겨야 합니다.

**입출력 예**
a            b            return
캠프코드    코드캠프     코드캠프
코딩        딩코         딩코  
*/

function solution(a, b) {
  // 여기에 코드를 작성하세요.
  let company = a;
  company = b;
  console.log(b);
}

solution('캠프코드', '코드캠프'); // "코드캠프"
solution('코딩', '딩코'); // "딩코"
