/*
https://dingco.notion.site/ce3e1d543b0b45c69709f10b2ce111be

개발자 원두는 새로운 기능을 개발하는 중입니다.
작성한 코드 중에 버그를 찾아 제거하세요. 
배열 feature에는 문자열 ‘code’ 또는 ‘bug’가 담겨있습니다. 
feature에 ‘bug’가 있다면 제거한 배열을 return하는 함수 solution을 완성해주세요.

**제한사항**
- 배열 feature 안에 있는 ‘bug’의 개수는 0개 또는 1개입니다.
- 배열 feature의 길이는 1 이상 10 이하입니다.
*/

function solution(feature) {
  console.log(feature.filter((e) => e !== 'bug'));
}

function solution2(feature) {
  const idx = feature.indexOf('bug');
  if (idx >= 0) feature.splice(idx, 1);
  console.log(feature);
}

function solution3(feature) {
  const idx = feature.indexOf('bug');
  let arr1 = [...feature],
    arr2 = [];
  if (idx >= 0) {
    arr1 = feature.slice(0, idx);
    arr2 = feature.slice(idx + 1);
  }
  console.log([...arr1, ...arr2]);
}

solution(['code', 'bug', 'code']); // ["code", "code"]
solution(['code', 'code']); // ["code", "code"]
solution2(['code', 'bug', 'code']); // ["code", "code"]
solution2(['code', 'code']); // ["code", "code"]
solution3(['bug', 'code', 'code']); // ["code", "code"]
solution3(['code', 'code']); // ["code", "code"]
