#include <bits/stdc++.h>

using namespace std;

int n, a, mn = 1000001, mx = -1000001;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  for(int i=n; i; i--){
    cin >> a;
    if(mn > a) mn = a;
    if(mx < a) mx =  a;
  }

  cout << mn << ' ' << mx;

  return 0;
}