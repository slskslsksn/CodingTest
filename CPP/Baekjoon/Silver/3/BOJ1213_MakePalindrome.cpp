#include <bits/stdc++.h>

using namespace std;

string s;
int n[26], cnt;
char c;
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> s;
  for(int i=0; i<s.size(); i++){
    n[s[i]-'A']++;
  }

  for(int i=0; i<26; i++){
    if(cnt > 1 || (s.size()%2==0 && n[i] == 1)){
      cout << "I'm Sorry Hansoo" << '\n';
      return 0;
    }
    if(n[i]%2==1){
      cnt++;
      c = i+'A';
    }
  }

  for(int i=0; i<26; i++){
    for(int j=0; j<n[i]/2; j++){
      cout << (char)(i+'A');
    }
  }
  if(s.size()%2 != 0)
    cout << c;
  for(int i=25; i>=0; i--){
    for(int j=0; j<n[i]/2; j++){
      cout << (char)(i+'A');
    }
  }

  return 0;
}