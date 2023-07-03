#include <bits/stdc++.h>

using namespace std;

const int MAX = 8;

const int dy[4]{-1,0,1,0};
const int dx[4]{0,1,0,-1};

int n, m, a[MAX][MAX], ret;
bool visited[MAX][MAX];

vector<pair<int, int>> virusList, wallList;

void dfs(int y, int x){
  visited[y][x] = 1;
  for(int i=0; i<4; i++){
    int ny = y +dy[i];
    int nx = x +dx[i];
    if(ny<0 || ny>=n || nx<0 || nx>=m) continue;
    if(visited[ny][nx] || a[ny][nx]) continue;
    dfs(ny, nx);
  }
}

int solve(){
  fill(&visited[0][0], &visited[0][0] + MAX*MAX, 0);
  for(pair<int, int> b : virusList){
        visited[b.first][b.second] = 1;
        dfs(b.first, b.second);
  } 

  int cnt = 0;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      if(a[i][j] == 0 && !visited[i][j])cnt++;
    }
  } 
  return cnt;  
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n >> m;
  for(int i=0;i<n;i++){
    for(int j=0;j<m;j++){
      cin>> a[i][j];
      if(a[i][j] == 2) virusList.push_back({i,j});
      if(a[i][j] == 0) wallList.push_back({i,j});
    }
  }
  for(int i=0;i<wallList.size(); i++){
    for(int j=0; j<i; j++){
      for(int k=0; k<j; k++){
        a[wallList[i].first][wallList[i].second] = 1;
        a[wallList[j].first][wallList[j].second] = 1;
        a[wallList[k].first][wallList[k].second] = 1;
        ret = max(ret, solve());
        a[wallList[i].first][wallList[i].second] = 0;
        a[wallList[j].first][wallList[j].second] = 0;
        a[wallList[k].first][wallList[k].second] = 0;
      }
    }
  }

  cout << ret;
  return 0;
}