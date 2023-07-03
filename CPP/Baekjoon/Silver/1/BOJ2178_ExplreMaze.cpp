#include <bits/stdc++.h>

using namespace std;

int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};
int n, m, a[104][104], v[104][104], y, x;
string str;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n >> m;
  for(int i=0; i<n; i++){
    cin >> str;
    for(int j=0; j<m; j++) 
      a[i][j] = str[j] - '0';
  }

  queue<pair<int, int>> q;
  q.push({0,0});
  v[0][0] = 1;
  while(q.size()){
    tie(y, x) = q.front(), q.pop();
    int ny, nx;
    for(int i=0; i<4; i++){
      ny = y + dy[i];
      nx = x + dx[i];
      if(ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
      if(a[ny][nx] == 0 || v[ny][nx]) continue;
      q.push({ny,nx});
      v[ny][nx] = v[y][x] + 1;
    }
  }

  cout << v[n-1][m-1];


  return 0;
}