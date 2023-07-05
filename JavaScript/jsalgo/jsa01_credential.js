const datas = [
  [' + - - + - + - ', ' + + + - + - + ', ' + + - + + + - '],
  [' + + + - - + + ', ' + + + - + - - ', '++----+', '+++ --+ -', '+++-+ - -'],
  [' + + - - - - + ', ' + + - + + - - ', '+ +-- +++ ', ' ++- ++++']
]

function solution(data){
  let credential = '';
  for(const str of data){
    let temp = '';
    for(const c of str){
      if(c==='+')temp += 1;
      else if(c==='-')temp += 0;
    }
    const alpha = String.fromCharCode(parseInt(temp, 2));
    credential += alpha;
  }
  return credential;
}


for(const data of datas){
  console.log(solution(data));
}