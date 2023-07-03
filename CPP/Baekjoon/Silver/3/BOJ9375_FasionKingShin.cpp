#include <bits/stdc++.h>

using namespace std;

int t, n;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> t;
  while(t--){
    cin >> n;
    map<string, int> mp;
    string s;
    for(int i=0; i<n; i++){
      cin >> s >> s;
      mp[s]++;
    }
    long long ret = 1;
    for(auto it : mp){
      ret *= (long long)it.second + 1;
    }
    cout << --ret << '\n';
  }

  return 0;
}