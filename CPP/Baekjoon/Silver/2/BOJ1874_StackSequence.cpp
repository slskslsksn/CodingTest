#include <bits/stdc++.h>

using namespace std;

int n, seq[100000];
queue<char> ret;
stack<int> num;
bool can = true;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  for(int i=0; i<n; i++){
    cin >> seq[i];
  }

  for(int i=1, idx=0; can && i<=n; i++){
    num.push(i);
    ret.push('+');
    while(num.size() != 0 && num.top() == seq[idx]){
      num.pop();
      ret.push('-');
      idx++;
    }
    if(num.size() != 0 && num.top() > seq[idx]){
      can = false;
    }
  }
  
  if(can){
    int size = ret.size();
    for(int i=0; i<size; i++){
      cout << ret.front() << '\n';
      ret.pop();
    }
  }else{
    cout << "NO" << '\n';
  }

  return 0;
}