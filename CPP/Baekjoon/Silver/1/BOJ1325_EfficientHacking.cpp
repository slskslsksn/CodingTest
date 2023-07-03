#include <bits/stdc++.h>

using namespace std;

vector<int> adj[10001];
int n, m, a, b, top, cnt[10001];
bool visited[10001];

int dfs(int here){
  visited[here] = 1;
  int ret = 0;
  for(int there : adj[here]){
    if(visited[there]) continue;
    ret ++; 
    ret += dfs(there);
  }
  return ret;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n >> m;

  while(m--){
    cin >> a >> b;
    adj[b].push_back(a);
  }

  for(int i=1; i<=n; i++){
    fill(&visited[0], &visited[10001], 0);
    cnt[i] = dfs(i);
    top = max(top, cnt[i]);
  }

  for(int i=1; i<=n; i++){
    if(cnt[i] == top) cout << i << ' ';
  }
  return 0;
}