#include <bits/stdc++.h>

using namespace std;

int n, cnt, sum;
string s;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  for(int i=n; i; i--){
    cin >> s;
    cnt = sum = 0;
    for(int j=0; j<s.size(); j++){
      if(s[j] == 'O') sum += ++cnt;
      else cnt = 0;
    }
    cout << sum << '\n';
  }

  return 0;
}