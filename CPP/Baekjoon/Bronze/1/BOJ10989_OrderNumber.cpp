#include <bits/stdc++.h>

using namespace std;

int v[10004];
int N, n;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> N;
  for(int i=0; i<N; i++){
    cin >> n;
    v[n]++;
  }
  for(int i=1; i<=10000; i++){
    while(v[i] != 0){
      cout << i << '\n';
      v[i]--;
    }
  }

  return 0;
}