#include <bits/stdc++.h>

using namespace std;

stack<int> st;
int n, a;
string str;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  for(int i=0; i<n; i++){
    cin >> str;
    if(str.compare("push") == 0){
      cin >> a;
      st.push(a);
    }else if(str.compare("pop") == 0){
      if(st.empty()) cout << -1 << '\n';
      else{
        cout << st.top() << '\n';
        st.pop();
      }
    }else if(str.compare("size") == 0){
      cout << st.size() << '\n';
    }else if(str.compare("empty") == 0){
      cout << st.empty() << '\n';
    }else if(str.compare("top") == 0){
      if(st.empty()) cout << -1 << '\n';
      else cout << st.top() << '\n';
    }
  } 

  return 0;
}