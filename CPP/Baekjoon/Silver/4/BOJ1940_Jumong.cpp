#include <bits/stdc++.h>

using namespace std;

map<int, int> mp;
int n, m, a, ret;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n >> m;
  for(int i=n; i; i--){
    cin >> a;
    if(mp.find(m-a) != mp.end()) ret++;
    else mp[a]++;
  }

  cout << ret;

  return 0;
}