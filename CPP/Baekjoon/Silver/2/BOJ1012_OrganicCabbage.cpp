#include <bits/stdc++.h>

using namespace std;

int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};
int t,n,m,k,a[52][52], v[52][52]; // 까먹고 int로 했는데 bool이 좀 더 좋음

void go(int y, int x){
  v[y][x] = 1;
  for(int i=0; i<4; i++){
    int ny = y + dy[i];
    int nx = x + dx[i];
    if(ny<0 || ny>=n || nx<0 || nx>=m) continue;
    if(a[ny][nx] == 0 || v[ny][nx] == 1) continue;  // 이것도 굳이 continue 하지말고 a==1 v==0 하면 될듯
    go(ny,nx);
  }
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> t;
  while(t--){
    cin >> n >> m >> k;
    memset(a, 0, sizeof(a));
    memset(v, 0, sizeof(v));
    int i, j, cnt=0;
    while(k--){
      cin >> i >> j;
      a[i][j] = 1;
    }
    for(int i=0; i<n; i++){
      for(int j=0; j<m; j++){
        if(v[i][j] == 0 && a[i][j] == 1){
          go(i, j);
          cnt++;
        }
      }
    }
    cout << cnt << '\n';
  }


  return 0;
}