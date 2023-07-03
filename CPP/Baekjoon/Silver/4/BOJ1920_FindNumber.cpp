#include <bits/stdc++.h>

using namespace std;

map<int, bool> mp;
int n, m, t;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  for(int i=n; i; i--){
    cin >> t;
    mp[t] = true;
  }
  cin >> m;
  for(int i=m; i; i--){
    cin >> t;
    cout << mp[t] << '\n';
  }

  return 0;
}