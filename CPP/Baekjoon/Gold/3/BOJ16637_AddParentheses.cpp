#include <bits/stdc++.h>

using namespace std;

int n, num[10], nsize, ret=INT_MIN;
char op[9];

int cal(int a, int b, char op){
  switch(op){
    case '+': return a+b;
    case '-': return a-b;
    case '*': return a*b;
    default: return 0;
  }
}

void solve(int here, int result){
  if(here == nsize-1){
    ret = max(ret, result);
    return;
  }
  solve(here+1, cal(result, num[here+1], op[here]));
  if(here+2 < nsize){
    solve(here+2, cal(result, cal(num[here+1], num[here+2], op[here+1]), op[here]));
  }
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  for(int i=0; i<n; i++){
    if(i%2==0) cin >> num[i/2];
    else cin >> op[i/2];
  }
  nsize = n/2+1;
  solve(0, num[0]);
  cout << ret;

  return 0;
}