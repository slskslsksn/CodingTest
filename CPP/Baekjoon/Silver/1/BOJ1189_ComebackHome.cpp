#include <bits/stdc++.h>

using namespace std;

int dy[]{1,0,-1,0}, dx[]{0,1,0,-1};
int ret,r, c, k;
bool a[5][5], visited[5][5];
string s;

void dfs(int y, int x, int n){
  if(y==0 && x==c-1){
    if(n==k) ret++;
    return;
  }
  visited[y][x] = 1;
  for(int i=0; i<4; i++){
    int ny = y + dy[i];
    int nx = x + dx[i];
    if(ny<0 || ny>=r || nx<0 || nx>=c || visited[ny][nx] || a[ny][nx]) continue;
    dfs(ny,nx,n+1);
  }
  visited[y][x] = 0;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> r >> c >> k;
  for(int i=0; i<r; i++){
    cin >> s;
    for(int j=0; j<c; j++){
      if(s[j] == '.') a[i][j] = 0;
      else a[i][j] = 1;
    }
  }

  dfs(r-1,0,1);
  cout << ret;

  return 0;
}