#include <bits/stdc++.h>

using namespace std;

string s;
int ret;
map<int, int> mp;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> s;
  if(s.size() == 1){
    cout << 1;
    return 0;
  }
  for(char c : s){
    int i = c != '9' ? c-'0' : c-'0'-3;
    mp[i]++;
  }

  for(auto it : mp){
    int i = it.first != 6 ? it.second : it.second%2 == 0 ? it.second/2 : (it.second/2)+1;
    ret = i > ret ? i : ret;
  }

  cout << ret;

  return 0;
}