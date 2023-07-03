#include <bits/stdc++.h>

using namespace std;

const int d = 2000;

char a[1500][1500];
int dx[]{0,0,1,-1}, dy[]{1,-1,0,0};
int r, c, visited_s[1500][1500], visited[1500][1500], s, cnt;
bool meet;

queue<int> melt(queue<int> q){
  queue<int> temp;
  while(q.size()){
    int y = q.front()/d;
    int x = q.front()%d;
    q.pop();
    for(int i=0; i<4; i++){
      int ny = y+dy[i];
      int nx = x+dx[i];
      if(ny<0||ny>=r||nx<0||nx>=c||visited[ny][nx]) continue;
      visited[ny][nx] = 1;
      if(a[ny][nx] == 'X'){
        temp.push(d*ny+nx);
        a[ny][nx] = '.';
      }else{
        q.push(d*ny+nx);
      }
    }
  }
  return temp;
}

queue<int> moveSwan(queue<int> q){
  queue<int> temp;
  while(q.size()){
    int y = q.front()/d;
    int x = q.front()%d;
    q.pop();
    for(int i=0; i<4; i++){
      int ny = y+dy[i];
      int nx = x+dx[i];
      if(ny<0||ny>=r||nx<0||nx>=c||visited_s[ny][nx]) continue;
      visited_s[ny][nx] = 1;
      if(a[ny][nx] == 'X'){
        temp.push(d*ny+nx);
      }else if(a[ny][nx] == 'L'){
        meet = 1;
      }else{
        q.push(d*ny+nx);
      }
    }
  }
  return temp;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  queue<int> q, sq;
  cin >> r >> c;
  for(int i=0; i<r; i++){
    cin >> a[i];
    for(int j=0; j<c; j++){
      if(a[i][j]=='.' || a[i][j] == 'L'){
         q.push(d*i+j);
         visited[i][j] = 1;
      }
      if(a[i][j] == 'L'){
        s = d*i+j;
      }
    }
  }

  sq.push(s);
  visited_s[s/d][s%d] = 1;
  while(!meet){
    cnt++;
    q = melt(q);
    sq = moveSwan(sq);
  }
  cout << cnt << '\n';
  
  return 0;
}