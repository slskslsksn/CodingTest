#include <bits/stdc++.h>

using namespace std;

int t, k, n, s[15][15];

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  
  for(int i=1; i<15; i++){
    s[0][i] = i;
    s[i][1] = 1;
  }
  for(int i=1; i<15; i++){
    for(int j=2; j<15; j++){
      s[i][j] = s[i][j-1] + s[i-1][j];
    }
  }

  cin >> t;
  for(int i=t; i; i--){
    cin >> k >> n;
    cout << s[k][n] << '\n';
  }

  return 0;
}