#include <bits/stdc++.h>

using namespace std;

#define prev aaa

const int max_n = 200004;

int visited[max_n], prev[max_n], n, k, cnt;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n >> k;
  if(n == k){
    cout << 0 << '\n' << k;
    
    return 0;
  }
  visited[n] = 1;
  queue<int> q;
  q.push(n);
  while(q.size()){
    int here = q.front(); q.pop();
    if(here == k) break;
    for(int next : {here+1, here-1, here*2}){
      if(next>=max_n||next<0||visited[next])continue;
      visited[next] = visited[here]+1;
      prev[next] = here;
      q.push(next);
    }
  }
  cout << visited[k]-1 << '\n';
  vector<int> v;
  for(int i=0, j=k; i<visited[k]; i++, j=prev[j]){
    v.push_back(j);
  }
  for(int i=v.size()-1; i>=0; i--) cout << v[i] << ' ';

  return 0;
}