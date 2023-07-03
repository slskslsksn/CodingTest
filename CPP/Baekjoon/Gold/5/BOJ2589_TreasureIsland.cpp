#include <bits/stdc++.h>

using namespace std;

int dy[]{-1,0,1,0}, dx[]{0,1,0,-1};
vector<pair<int, int>> lands;
int visited[50][50], a[50][50];
int n, m, ret;
string s;

int get(pair<int, int> _here){
  queue<pair<int, int>> q;
  q.push(_here);
  int result = 0;
  memset(visited, 0, sizeof(visited));
  visited[_here.first][_here.second] = 1;

  while(q.size()){
    pair<int, int> here = q.front(); q.pop();
    result = max(result, visited[here.first][here.second]);
    // cout << here.first << ' ' << here.second << ' ' << result << '\n';
    for(int i=0; i<4; i++){
      int ny = here.first + dy[i];
      int nx = here.second + dx[i];
      if(ny<0||nx<0||ny>=n||nx>=m||visited[ny][nx]||a[ny][nx]==0)continue;
      q.push({ny, nx});
      visited[ny][nx] = visited[here.first][here.second] + 1;
    }
  }
  return result-1;
}

void go(){
  for(auto here : lands){
    ret = max(ret, get(here));
  }
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n >> m;
  for(int i=0; i<n; i++){
    cin >> s;
    for(int j=0; j<m; j++){
      if(s[j] == 'L'){
        a[i][j] = 1;
        lands.push_back({i,j});
      } 
    }
  }
  go();
  cout << ret;
  return 0;
}