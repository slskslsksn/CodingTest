#include <bits/stdc++.h>

using namespace std;

queue<int> a;
int n;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  for(int i=1; i<=n; i++){
    a.push(i);
  }

  for(;a.size()!=1;){
    a.pop();
    a.push(a.front());
    a.pop();
  }

  cout << a.front() << '\n';

  return 0;
}