/*
https://dingco.notion.site/72e5e2d71c364b6eac7725160a4dddc4

# 삑 그리고 다음
개발자 원두는 랜덤으로 바코드 숫자를 만들어주는 기능을 개발하고 있습니다.
바코드는 0부터 9까지의 숫자 13자리로 이루어져 있습니다.
바코드에 들어갈 숫자들이 담긴 배열이 주어질 때
모든 0을 배열의 끝으로, 나머지는 순서를 유지한 배열을 return하는 함수 solution을 완성해주세요.

**제한 사항**
- 배열 barcode의 길이는 13입니다.
- 각 숫자는 0 이상 9 이하의 정수입니다.
*/

function solution(barcode) {
  const res = barcode.filter((n) => n !== 0);
  for (let i = 0; res.length !== 13; i++) res.push(0);
  console.log(res);
}

solution([8, 8, 0, 1, 2, 3, 4, 5, 6, 0, 1, 0, 5]);
// [8, 8, 1, 2, 3, 4, 5, 6, 1, 5, 0, 0, 0]
solution([0, 7, 6, 0, 0, 4, 6, 9, 0, 2, 5, 0, 1]);
// [7, 6, 4, 6, 9, 2, 5, 1, 0, 0, 0, 0, 0]
