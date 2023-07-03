#include <bits/stdc++.h>

using namespace std;

int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};

int n, a[104][104], top, ret = 1;
bool v[104][104];
map<int, bool> mp;

void dfs(int y, int x){
  v[y][x] = 1;
  for(int i=0; i<4; i++){
    int ny = y + dy[i];
    int nx = x + dx[i];
    if(ny<0 || nx<0 || ny>=n|| nx>=n) continue;
    if(v[ny][nx] == 0) dfs(ny,nx);
  }
}

// void dfs(int y, int x, int d){
//   v[y][x] = 1;
//   for(int i=0; i<4; i++){
//     int ny = y + dy[i];
//     int nx = x + dx[i];
//     if(ny<0 || nx<0 || ny>=n|| nx>=n) continue;
//     if(v[ny][nx] == 0 && a[ny][nx] > d) dfs(ny,nx, d);
//   }
// }

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  for(int i; i<n; i++){
    for(int j=0; j<n; j++){
      int temp;
      cin >> temp;
      a[i][j] = temp;
      mp[temp] = true;
      if(temp > top) top = temp;
    }
  }

  for(int i=0; i<top; i++){
    if(i == 0){ ret=1; continue;}
    if(mp[i] == 0) continue;
    int cnt = 0;
    fill(&v[0][0], &v[n-1][n], 0);
    for(int j=0; j<n; j++){
      for(int k=0; k<n; k++){
        if(a[j][k] <= i) v[j][k] = 1;
      }
    }
    for(int j=0; j<n; j++){
      for(int k=0; k<n; k++){
        if(v[j][k] == 0){
          dfs(j, k);
          cnt++;
        }
      }
    }
    if(cnt > ret) ret = cnt;
  }
 
  // for(int d=1; d<top; d++){
  //   if(mp[d] == 0) continue;
  //   int cnt = 0;
  //   fill(&v[0][0], &v[n-1][n], 0);
  //   for(int i=0; i<n; i++){
  //     for(int j=0; j<n; j++){
  //       if(a[i][j] > d && v[i][j] == 0){
  //         dfs(i, j, d);
  //         cnt++;
  //       }
  //     }
  //   }
  //   if(cnt > ret) ret = cnt;
  // }

  cout << ret;

  return 0;
}