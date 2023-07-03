#include <bits/stdc++.h>

using namespace std;

int dy[]{0,-1,0,1}, dx[]{1,0,-1,0};
int n, l, r, a[50][50];
bool visited[50][50], diff[101];
vector<vector<pair<int,int>>> unions;

void print(){
  cout << '\n';
    for(int i=0; i<n; i++){
      for(int j=0; j<n; j++){
        cout << a[i][j] << ' ';
      }
      cout << '\n';
    }
}

vector<pair<int, int>> getMyUnion(int y, int x){
  visited[y][x] = 1;
  vector<pair<int, int>> myunion;
  queue<pair<int, int>> q;
  q.push({y,x});
  int sum = 0, avg = 0, cnt = 0;
  while(q.size()){
    pair<int, int> here = q.front(); q.pop();
    myunion.push_back(here);
    cnt++;
    sum += a[here.first][here.second];
    
    for(int i=0; i<4; i++){
      int ny = here.first + dy[i];
      int nx = here.second + dx[i];
      if(ny<0||ny>=n||nx<0||nx>=n||visited[ny][nx]) continue;
      if(diff[abs(a[here.first][here.second] - a[ny][nx])]){
        visited[ny][nx] = 1;
        q.push({ny, nx});
      }
    }
  }
  if(cnt <= 1) myunion.clear();
  else{
    avg = sum/cnt;
    myunion.push_back({avg, avg});
  }
  return myunion;
}

bool getUnions(){
  bool isExist = false;
  memset(visited, 0, sizeof(visited));
  for(int i=0; i<n; i++){
    for(int j=0; j<n; j++){
      if(visited[i][j]) continue;
      vector<pair<int, int>> myunion = getMyUnion(i, j);
      if(myunion.empty()) continue;
      unions.push_back(myunion);
    }
  }
  return !unions.empty();
}

void move(){
  for(auto myunion : unions){
    int avg = myunion.back().first;
    myunion.pop_back();
    for(auto here : myunion){
      a[here.first][here.second] = avg;
    }
  }
}

int go(){
  int ret = 0;

  while(getUnions()){
    ret++;
    move();
    unions.clear();
  }

  return ret;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n >> l >> r;
  for(int i=0; i<n; i++){
    for(int j=0; j<n; j++){
      cin >> a[i][j];
    }
  }
  for(int i=l; i<=r; i++) diff[i] = 1;

  cout << go();

  return 0;
}