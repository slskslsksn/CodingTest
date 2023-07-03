#include <bits/stdc++.h>

using namespace std;

int t, r;
string s, ret;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> t;
  for(int i=0; i<t; i++){
    cin >> r >> s;
    ret = "";
    for(int j=0; j<s.size(); j++){
      for(int k=0; k<r; k++){
        ret += s[j];
      }
    }
    cout << ret << '\n';
  }

  return 0;
}