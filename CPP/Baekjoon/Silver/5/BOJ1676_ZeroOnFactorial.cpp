#include <bits/stdc++.h>

using namespace std;

int a(int n){
  if(n==0) return 0;
  return n/5 + a(n/5);
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  int i;
  cin >> i;
  cout << a(i);

  return 0;
}