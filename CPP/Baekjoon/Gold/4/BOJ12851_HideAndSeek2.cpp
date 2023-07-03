#include <bits/stdc++.h>

using namespace std;

int n,k,sec=100000;
int visited[100001];
map<int, int> cnt;

void go(int _here){
  visited[_here] = 1;
  cnt[_here] = 1;
  queue<int> q;
  q.push(_here);
  while(q.size()){
    int here = q.front(); q.pop();
    for(int next : {here+1, here-1, here*2}){
      if(next<0 || next>100000 || (here>k&&next>here)) continue;
      if(!visited[next]){
        q.push(next);
        visited[next] = visited[here]+1;
        cnt[next] += cnt[here];
      }
      else if(visited[here]+1 == visited[next]){
        cnt[next] += cnt[here];
      }
    }
  }
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n >> k;
  go(n);

  cout << visited[k]-1 << '\n' << cnt[k];

  return 0;
}