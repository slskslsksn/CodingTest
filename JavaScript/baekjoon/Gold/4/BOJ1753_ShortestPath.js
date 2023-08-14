const input = require('fs').readFileSync('BOJ1753_ShortestPath.txt', 'utf-8').trim().split('\n').map(e=>e.trim().split(' ').map(Number));
const INF = 1e9;
const [V, E] = input[0];
const START = input[1][0];
const visit = Array(V+1).fill(0);
const distances = Array(V+1).fill(INF);

const arr = Array.from({length: V+1}, () => []);

for(let i=2; i<E+2; i++){
  const [s, e, d] = input[i];
  arr[s].push([e,d]);
}

const getMin = () => {
  let minDistance = INF;
  let minNode = null;

  for(let node = 1; node <= V; node++){
    if(!visit[node] && distances[node] <= minDistance){
      minDistance = distances[node];
      minNode = node;
    }
  }

  return minNode;
}

const go = (start) => {
  distances[start] = 0;
  for(let i=0; i<V; i++){
    const minNode = getMin();
    visit[minNode] = 1;
    for(let i in arr[minNode]){
      const [next, dist] = arr[minNode][i];
      const distance = distances[minNode] + dist;
      distances[next] = Math.min(distances[next], distance);
    }
  }
}
go(START);
console.log(distances.map(e => e === INF ? 'INF' : e).slice(1).join('\n'))
