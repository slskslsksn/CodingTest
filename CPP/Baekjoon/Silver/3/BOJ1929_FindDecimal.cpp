#include <iostream>

using namespace std;

int m,n;
bool b[1000004];

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> m >> n;
  b[1] = 1;
  for(int i=2; i<=n; i++){
    if(!b[i]){
      for(int j=i*2; j<=n; j+=i){
        b[j] = true;
      }
    }
  }

  for(int i=m; i<=n; i++){
    if(!b[i]) cout << i << '\n';
  }

  return 0;
}