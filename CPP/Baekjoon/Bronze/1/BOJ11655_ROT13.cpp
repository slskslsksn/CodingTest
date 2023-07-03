#include <bits/stdc++.h>

using namespace std;

string s;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  getline(cin, s);

  for(int i=0; i<s.size(); i++){
    char c = s[i];
    if(('A'<=c && c<='Z') || ('a'<=c && c<='z')){
      if(('A'<=c && c<='Z' && c+13>'Z') || ('a'<=c && c<='z' && c+13>'z')){
        s[i] -= 13;
      }else{
        s[i] += 13;
      }
    }
  }
  cout << s ;
  return 0;
}