/*
https://dingco.notion.site/4484b058c6554eca9ca8a89733439aed

# 제비뽑기 용지
개발자 원두는 회사 이벤트를 위해 제비뽑기 종이를 만들어야 합니다.
종이는 1cm 정사각형으로 만들어야 합니다.
종이의 가로 길이가 a로 주어지고 세로 길이가 b로 주어질 경우, 
원두가 가위질을 몇 번 해야 하는지 return 하는 함수 solution을 완성하세요.

**제한 사항**
- a와 b의 단위는 cm입니다.
- a와 b는 200을 넘지 않습니다.
- 가위가 좋지 않아 종이를 겹쳐 자를 수 없습니다.
*/

function solution(a, b) {
  console.log(a * b - 1);
}

solution(100, 100); // 9999
solution(1, 1); // 0
solution(20, 50); // 999
