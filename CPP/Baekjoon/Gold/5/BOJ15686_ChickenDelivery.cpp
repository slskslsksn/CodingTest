#include <bits/stdc++.h>

using namespace std;

const int N = 50;
int n, m, ret=INT_MAX;
vector<pair<int,int>> house, chicken, M;
int a[N][N];

int get(pair<int, int> h, pair<int,int> c){
  return abs(h.first-c.first)+abs(h.second-c.second);
}

void go(int start){
  if(M.size() == m){
    int sum = 0;
    for(int i=0; i<house.size(); i++){
      int dis = n*n;
      for(int j=0; j<m; j++){
        dis = min(dis, get(house[i], M[j]));
      }
      sum += dis;
    }
    ret = min(ret, sum);
  }
  for(int i=start+1; i<chicken.size(); i++){
    M.push_back(chicken[i]);
    go(i);
    M.pop_back();
  }

}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n >> m;
  for(int i=0; i<n; i++){
    for(int j=0; j<n; j++){
      cin >> a[i][j];
      if(a[i][j] == 1) house.push_back({i,j});
      if(a[i][j] == 2) chicken.push_back({i,j});
    }
  }
  go(-1);
  cout << ret << '\n';
  
  return 0;
}