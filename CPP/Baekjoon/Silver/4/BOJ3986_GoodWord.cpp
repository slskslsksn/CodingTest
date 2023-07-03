#include <bits/stdc++.h>

using namespace std;

int n, ret;
string s;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  for(;n;n--){
    cin >> s;
    stack<char> st;
    for(char c : s){
      if(st.size() && st.top() == c) st.pop();
      else st.push(c);
    }
    if(st.empty()) ret++;
  }
  cout << ret;

  return 0;
}