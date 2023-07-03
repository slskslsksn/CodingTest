#include <bits/stdc++.h>

using namespace std;

map<int, bool> mp;
int n, m, c;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  for(int i=0; i<n; i++){
    cin >> c;
    mp[c] = 1;
  }
  cin >> m;
  for(int i=0; i<m; i++){
    cin >> c;
    cout << mp[c] << ' ';
  }

  return 0;
}