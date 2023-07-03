#include <bits/stdc++.h>

using namespace std;

string s;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  for(int i=0; i<8; i++){
    int c;
    cin >> c;
    s += c + '0';
  }

  if(s == "12345678") cout << "ascending";
  else if(s == "87654321") cout << "descending";
  else cout << "mixed";

  return 0;
}