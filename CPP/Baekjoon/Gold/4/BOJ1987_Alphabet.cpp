#include <bits/stdc++.h>

using namespace std;

int dx[]{0,0,1,-1}, dy[]{1,-1,0,0},r,c,ret, visited[26];
char a[20][20];

void dfs(int y, int x, int cnt){
  ret = max(ret, cnt);
  for(int i=0; i<4; i++){
    int ny = y + dy[i];
    int nx = x + dx[i];
    if(ny<0 || ny>=r || nx<0 || nx>=c) continue;
    int next = (int)a[ny][nx] - 'A';
    if(visited[next] == 0){
      visited[next] = 1;
      dfs(ny, nx, cnt+1);
      visited[next] = 0;
    }
  }

}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> r >> c;
  for(int i=0; i<r; i++){
    cin >> a[i];
  }
  visited[(int)a[0][0]-'A'] = 1;
  dfs(0, 0, 1);
  cout << ret;

  return 0;
}