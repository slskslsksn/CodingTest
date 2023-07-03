const solution = (n, x = 1) => {
  while (n % ++x !== 1);
  return x;
};
const print = (n) => console.log(n);

print(solution(10));
print(solution(3));
print(solution(12));
