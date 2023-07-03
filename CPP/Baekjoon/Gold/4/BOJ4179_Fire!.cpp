#include <bits/stdc++.h>

using namespace std;
const int INF = 123456789;

int dx[]{0,0,1,-1},dy[]{1,-1,0,0};
char maze[1000][1000];
int timej[1000][1000], timef[1000][1000], r, c, ret;

bool in(int a, int b){
  return 0 <= a && a < r && 0 <= b && b < c;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  queue<pair<int,int>> q;
  pair<int, int> start;
  fill(&timef[0][0], &timef[0][0] + 1000*1000, INF);

  cin >> r >> c;
  for(int i=0; i<r; i++){
    for(int j=0; j<c; j++){
      cin >> maze[i][j];
      if(maze[i][j] == 'F') {timef[i][j] = 1; q.push({i,j});}
      else if(maze[i][j] == 'J') start = {i,j};
    }
  }

  int y,x;
  while(q.size()){
    tie(y,x) = q.front(); q.pop();
    for(int i=0; i<4; i++){
      int ny=y+dy[i];
      int nx=x+dx[i];
      if(!in(ny,nx)) continue;
      if(timef[ny][nx] != INF || maze[ny][nx]=='#') continue;
      timef[ny][nx] = timef[y][x] +1;
      q.push({ny,nx});
    }
  }
  timej[start.first][start.second] = 1;
  q.push(start);
  while(q.size()){
    tie(y,x) = q.front(); q.pop();
    if(y>=r-1 || y <=0 || x>=c-1 || x <=0){
      ret=timej[y][x];
      break;
    }
    for(int i=0; i<4; i++){
      int ny=y+dy[i];
      int nx=x+dx[i];
      if(!in(ny,nx)) continue;
      if(timej[ny][nx] || maze[ny][nx]=='#') continue;
      if(timef[ny][nx] <= timej[y][x]+1) continue;
      timej[ny][nx] = timej[y][x] +1;
      q.push({ny,nx});
    }
  }
  if(ret != 0) cout << ret;
	else cout << "IMPOSSIBLE";

  return 0;
}