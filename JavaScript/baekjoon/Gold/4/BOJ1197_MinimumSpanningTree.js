const input = require('fs').readFileSync('BOJ1197_MinimumSpanningTree.txt').toString().trim().split('\n');
const [v, e] = input[0].trim().split(' ').map(Number);
const parent = Array.from({length: v+1}, () => 0);
function getParent(node){
  if(parent[node] === node) return 
}
const lines = [];
for(let i=1; i<=e; i++){
  const temp = input[i].trim().split(' ').map(Number);
  lines.push(new line(...temp));
}

lines.sort((a,b) => a.weight - b.weight);
let cnt = 0;
let sum = 0;

for(let i=0; i<e && cnt<v-1; i++){
  const {start, end, weight} = lines[i];
  const p1 = getParent(start);
  const p2 = getParent(end);
  if(p1 === p2) continue;
  if(p1 < p2) parent[p2] = p1;
  else parent[p1] = p2;
  sum += weight;
  cnt ++;
}
console.log(sum);

function line (start, end, weight) {
  return {
    start,
    end,
    weight,
  };
}

function getParent(node){
  if(parent[node] === 0) return node;
  return parent[node] = getParent(parent[node]);
}