#include <bits/stdc++.h>
using namespace std;
const int max_n = 500000;
int n, k, turn=1; bool visited[2][max_n+4], ok;
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  cin >> n >> k;
  if(n==k){cout<<0; return 0;}
  queue<int> q;
  q.push(n);
  visited[0][n] = 1;
  while(q.size()){
    k+=turn;
    int oe = turn%2;
    if(k>max_n) break;
    if(visited[oe][k]) ok=1;
    if(!ok){
      int qSize = q.size();
      for(int i=0; i<qSize; i++){
        int here = q.front(); q.pop();
        for(int next : {here+1, here-1, here*2}){
          if(next<0 || next>max_n || visited[oe][next]) continue;
          if(next==k) {ok=1; break;}
          visited[oe][next] = 1;
          q.push(next);
        }
        if(ok) break;
      }
    }
    if(ok) {cout << turn; return 0;}
    turn++;
  }

  cout << -1;
  return 0;
}