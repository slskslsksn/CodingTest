#include <bits/stdc++.h>

using namespace std;

string pattern, s;
string fl[2];
int n;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n >> pattern;
  int pos = pattern.find('*');
  fl[0] = pattern.substr(0, pos);
  pattern.erase(0, pos+1);
  fl[1] = pattern;  
  for(int i=0; i<n; i++){
    cin >> s;
    if(s.size() < fl[0].size() + fl[1].size()){
      cout << "NE\n";
      continue;
    }
    string f, l;
    f = s.substr(0, fl[0].size());
    l = s.substr(s.size()-fl[1].size(), fl[1].size());
    if(f == fl[0] && l == fl[1]) cout << "DA\n";
    else cout << "NE\n";
  }


  return 0;
}