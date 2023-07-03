#include <iostream>
#include <queue>

using namespace std;

int n, a;
string s;
queue<int> q;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  while(n--){
    cin >> s;
    if(s == "push"){
      cin >> a;
      q.push(a);
    }else if(s == "pop"){
      if(q.empty()) cout << -1;
      else{
        cout << q.front();
        q.pop();
      }
    }else if(s == "size"){
      cout << q.size();
    }else if(s == "empty"){
      cout << q.empty();
    }else if(s == "front"){
      if(q.empty()) cout << -1;
      else cout << q.front();
    }else{
      if(q.empty()) cout << -1;
      else cout << q.back();
    }
    if(s != "push") cout << '\n';
  }

  return 0;
}