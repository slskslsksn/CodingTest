#include <bits/stdc++.h>

using namespace std;

vector<pair<int, int>> v;
int n;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  while(n--){
    int x, y;
    cin >> x >> y;
    v.push_back({x,y});
  }
  sort(v.begin(), v.end());
  for(pair<int, int>p : v){
    cout << p.first << ' ' << p.second<< '\n';
  }


  return 0;
}