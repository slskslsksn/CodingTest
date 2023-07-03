#include <bits/stdc++.h>

using namespace std;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  int n, k, ret = -10000002;
  cin >> n >> k;

  int temp, psum[n+1] = {0,};

  for(int i=1; i<=n; i++){
    cin >> temp;
    psum[i] += temp + psum[i-1];
  }

  for(int i=k; i<=n; i++){
    ret = max(ret, psum[i] - psum[i-k]);
  }
  cout << ret;

  return 0;
}