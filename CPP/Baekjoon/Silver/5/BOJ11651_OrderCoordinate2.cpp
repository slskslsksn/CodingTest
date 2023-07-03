#include <bits/stdc++.h>

using namespace std;

vector<pair<int, int>> v;
int n, x, y;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  while(n--){
    cin >> x >> y;
    v.push_back({y,x});
  }
  sort(v.begin(), v.end());

  for(pair<int, int>p : v){
    cout << p.second << ' ' << p.first << '\n';
  }

  return 0;
}