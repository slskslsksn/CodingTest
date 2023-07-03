#include <bits/stdc++.h>

using namespace std;

vector<int> adj[50];
int n, t, c, root;

// 큰돌 풀이 (tree 형식)
int dfs(int here){
  int ret = 0;
  int child = 0;
  for(int there : adj[here]){
    if(there == c) continue;
    ret += dfs(there);
    child++;
  }
  if(child == 0) return 1;
  return ret;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  cin >> n;
  for(int i=0; i<n; i++){
    cin >> t;
    if(t == -1) root = i;
    else adj[t].push_back(i);
  }

  cin >> c;
  if(c == root) cout << 0;
  else cout << dfs(root);
  return 0;
}

// 내 풀이 (막무가내)
// vector<int> v[50];
// map<int, int> p;
// int n, t, c, cnt[51], ret;

// void go(int node){
//   cnt[node] = -1;
//   if(v[node].empty()) return;
//   for(int i=0; i<v[node].size(); i++){
//     go(v[node][i]); 
//   }
// }

// int main(){
//   ios_base::sync_with_stdio(false);
//   cin.tie(NULL);
//   cout.tie(NULL);

//   fill(&cnt[0], &cnt[51], -1);
//   cin >> n;
//   for(int i=0; i<n; i++){
//     if(cnt[i] == -1) cnt[i] = 0;
//     cin >> t;
//     if(t != -1){
//       if(cnt[t] == -1) cnt[t] = 0;
//       v[t].push_back(i);
//       cnt[t]++;
//       p[i] = t;
//     }
//   }

//   cin >> c;
//   cnt[p[c]]--;
//   go(c);
//   for(int i : cnt){
//     if(i==0) ret++;
//   }
//   cout << ret;
//   return 0;
// } 