#include <bits/stdc++.h>

using namespace std;

int dx[]{0,0,-1,1}, dy[]{1,-1,0,0}, n, m, visited[300][300], sy, sx, ey, ex, cnt;
char a[300][300];
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n >> m >> sy >> sx >> ey >> ex;
  sy--, sx--, ey--, ex--;
  for(int i=0; i<n; i++){
    for(int j=0; j<m; j++){
      cin >> a[i][j];
    }
  }

  queue<int> q;
  q.push(1000*sy + sx);
  visited[sy][sx] = 1;
  while(a[ey][ex] != '0'){
    cnt++;
    queue<int> temp;
    while(q.size()){
      int y = q.front() / 1000;
      int x = q.front() % 1000;
      q.pop();
      for(int i=0; i<4; i++){
        int ny = y+dy[i];
        int nx = x+dx[i];
        if(ny<0 || ny>=n|| nx<0 ||nx>=m || visited[ny][nx]) continue;
        visited[ny][nx] = cnt;
        if(a[ny][nx] != '0'){
          temp.push(1000*ny+nx);
          a[ny][nx] = '0';
        }
        else q.push(1000*ny+nx);
      }
    }
    q = temp;
  }
  cout << visited[ey][ex];
  return 0;
}