/*
https://dingco.notion.site/3e623b80f26f4fae8a850589e8b7d7eb

# 잡았다 요놈!
개발자 원두는 공용 냉장고에 푸딩을 넣어놨습니다.
하지만 다음날 출근해보니 푸딩이 사라지고 말았습니다.
푸딩이 정말 먹고 싶었던 원두는 CCTV를 확인하여 
범인은 팀원 중 가장 늦은 시간에 냉장고를 이용한 사람이라는 것을 알게 되었습니다. 
원두는 이 범인을 잡고자 합니다.
팀원의 이름과 냉장고 사용 시간을 객체 형태로 담은 배열이 arr로 주어질 때, 
“범인은 바로 @@@입니다!”를 return하는 함수 solution을 완성하세요.

**제한 사항**
- time은 시간만 주어지며, 클수록 늦은 시간입니다.
- 가장 늦은 시간에 냉장고를 이용한 사람은 한 명입니다.
- 9 ≤ time ≤ 24
*/

function solution(arr) {
  let name,
    time = 0;
  arr.map((e) => {
    if (e.time > time) {
      name = e.name;
      time = e.time;
    }
  });
  console.log(`범인은 바로 ${name}입니다!`);
}

solution([
  {
    name: '카페',
    time: 15,
  },
  {
    name: '모카',
    time: 12,
  },
  {
    name: '라떼',
    time: 10,
  },
  {
    name: '아라비카',
    time: 16,
  },
]);
// "범인은 바로 아라비카 입니다!"
