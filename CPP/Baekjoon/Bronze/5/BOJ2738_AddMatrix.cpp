#include <bits/stdc++.h>

using namespace std;

int a[2][101][101], n, m;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n >> m;
  for(int i=0; i<2; i++){
    for(int j=0; j<n; j++){
      for(int k=0; k<m; k++){
        cin >> a[i][j][k];
      }
    }
  }

  for(int i=0; i<n; i++){
    for(int j=0; j<m; j++){
      cout << a[0][i][j] + a[1][i][j] << ' ';
    }
    cout << '\n';
  }

  return 0;
}