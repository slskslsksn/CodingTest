#include <bits/stdc++.h>

using namespace std;

int a,b,c, ret[10];
string str;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> a >> b >> c;
  str = to_string(a*b*c);

  for(int i=0; i<str.size(); i++){
    ret[str[i]-'0']++;
  }
  
  for(int i:ret) cout << i << '\n';

  return 0;
}