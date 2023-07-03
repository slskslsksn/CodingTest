#include <iostream>
#include <queue>
#include <map>
#include <algorithm>
using namespace std;

int t, n, m, *r, cnt;
queue<int*> que;
map<int, int> mp;
string s;

int find(){
  int top = 0;
  return top;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> t;
  for(int i=t; i; i--){
    cin >> n >> m;
    if(n == 1){
      int temp;
      cin >> temp;
      cout << 1 << '\n';
      continue;
    }
    for(int j=0; j<n; j++){
      int *temp = new int;
      cin >> *temp;
      que.push(temp);
      if(mp.find(*temp) == mp.end()){
        s += *temp+'0';
      }
      mp[*temp]++;
      if(j==m) r=temp;
    }
    sort(s.begin(), s.end(), greater<>());

    for(;que.size()!=0;){
      int top = s[0]-'0';
      if(*(que.front()) == top){
        cnt++;
        if(que.front() == r){
          cout << cnt << '\n';
          break;
        }
        mp[top]--;
        if(mp[top] == 0) s.erase(0,1);
      }else{
        que.push(que.front());
      }
      que.pop();
    }
    mp.clear();
    while(!que.empty()) que.pop();
    s = "";
    cnt = 0;
  }

}