#include <bits/stdc++.h>

using namespace std;

int N, ret;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> N;
  // for(int i = N, t = N; i; i--){
  //   string s = to_string(i);
  //   int sum = 0;
  //   for(int j=0; j<s.size(); j++){
  //     sum += s[j]-'0';
  //   }
  //   t = i + sum;
  //   if(t == N) ret = i;
  // }

  for(int i = 1; i<=N; i++){
    int sum = i;
    for(int j=i; j; j/=10){
      sum += j%10;
    }
    if(sum == N) ret = i;
  }

  cout << ret;

  return 0;
}