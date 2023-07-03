// const solution = (s) => {
//   const sliced = s.split(' ');
//   let answer = '';
//   for (const word of sliced) {
//     let cnt = 1;
//     for (const c of word) {
//       if (cnt++ % 2 === 1) {
//         answer += c.toUpperCase();
//       } else {
//         answer += c.toLowerCase();
//       }
//     }
//     answer += ' ';
//   }
//   return answer.slice(0, -1);
// };

const solution = (s) => {
  return s
    .split(' ')
    .map((a) => {
      return a
        .split('')
        .map((b, i) => {
          return i % 2 === 0 ? b.toUpperCase() : b.toLowerCase();
        })
        .join('');
    })
    .join(' ');
};

console.log(solution('try by me on me'));
