#include <bits/stdc++.h>

using namespace std;

int a[26];
string str;
int top;
char ans;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> str;
  for(int i=0; i<str.size(); i++){
    char c = tolower(str[i]);
    a[c-'a']++;
  }

  ans = '?';
  top = 0;

  for(int i=0; i<26; i++){
    if(top < a[i]){
      top = a[i];
      ans = i + 'A';
    }else if(top == a[i]){
      ans = '?';
    }
  }
  cout << ans;
  return 0;
}