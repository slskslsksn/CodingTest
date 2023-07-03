#include <cstdio>
#include <queue>
#include <algorithm>
#include <set>
#include <memory.h>

using namespace std;

int n,m,start;
set<int> s[1001];
bool visited[1001];

void dfs(int here){
  visited[here] = 1;
  printf("%d ", here);
  for(int there : s[here]){
    if(visited[there]) continue;
    dfs(there);
  }
}

void bfs(int _here){
  visited[_here] = 1;
  queue<int> q;
  q.push(_here);
  while(q.size()){
    printf("%d ", q.front());
    set<int> here = s[q.front()]; q.pop();
    for(int there : here){
      if(visited[there]) continue;
      visited[there] = 1;
      q.push(there);
    }
  }
}

int main(){
  scanf("%d%d%d",&n,&m,&start);
  for(int i=0; i<m; i++){
    int a, b;
    scanf("%d%d", &a, &b);
    s[a].insert(b);
    s[b].insert(a);
  }

  dfs(start);
  printf("\n");
  memset(visited, 0, sizeof(visited));
  bfs(start);



  return 0;
}