#include <bits/stdc++.h>

using namespace std;

int dy[4] = {0, 0, 1, -1};
int dx[4] = {1, -1, 0, 0};
int m, n, k, cnt, ret;
bool a[104][104];
vector<int> s;

void dfs(int y, int x){
  a[y][x] = 1;
  cnt++;
  for(int i=0; i<4; i++){
    int ny = y + dy[i];
    int nx = x + dx[i];
    if(ny<0 || nx<0 || ny>=m || nx>=n) continue;
    if(a[ny][nx] == 0) dfs(ny,nx);
  }
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> m >> n >> k;
  for(int i=0; i<k; i++){
    int x1, x2, y1, y2;
    cin >> x1 >> y1 >> x2 >> y2;
    for(int x=x1; x<x2; x++){
      for(int y=y1; y<y2; y++){
        a[y][x] = 1;
      }
    }
  }

  for(int i=0; i<m; i++){
    for(int j=0; j<n; j++){
      if(a[i][j] == 0){
        cnt = 0;
        dfs(i,j);
        ret++;
        s.push_back(cnt);
      }
    }
  }

  sort(s.begin(), s.end());
  cout << ret << '\n';  // ret을 따로 구할게 아니라 s.size() 하면 되는거였음
  for(int i : s) cout << i << ' ';

  return 0;
}