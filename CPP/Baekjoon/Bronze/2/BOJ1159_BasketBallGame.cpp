#include <bits/stdc++.h>

using namespace std;

int a[26];

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  string s;
  int n;
  cin >> n;
  for(int i=0; i<n; i++){
    cin >> s;
    a[s[0]-'a']++;
  }
  s = "";
  for(int i=0; i<26; i++){
    if(a[i] >= 5){
      s += i+'a';
    }
  }

  if(s == ""){
    s = "PREDAJA";
  }

  cout << s;

  return 0;
}