#include <bits/stdc++.h>

using namespace std;

bool visited[100][100];
int dy[]{-1,0,1,0}, dx[]{0,1,0,-1};
int h,w, a[100][100], pre, now, day;
vector<pair<int,int>> v;

void melt(int y, int x){
  visited[y][x] = 1;
  if(a[y][x] == 1){
    v.push_back({y,x});
    now--;
    return;
  }
  for(int i=0; i<4; i++){
    int ny=y+dy[i];
    int nx=x+dx[i];
    if(ny<0||nx<0||ny>=h||nx>=w||visited[ny][nx])continue;
    melt(ny,nx);
  }
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> h >> w;
  for(int i=0; i<h; i++){
    for(int j=0; j<w; j++){
      cin >> a[i][j];
      if(a[i][j] == 1) now++;
    }
  }

  while(now){
    pre = now;
    day++;
    fill(&visited[0][0], &visited[0][0]+100*100, 0);
    v.clear();
    melt(0,0);
    for(pair<int, int> p : v){
      a[p.first][p.second] = 0;
    }
  }
  cout << day << '\n' << pre;
  return 0;
}