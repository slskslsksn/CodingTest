#include <bits/stdc++.h>

using namespace std;

int k, n, lan[100010], ret, temp;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> k >> n;
  for(int i=0; i<k; i++){
    cin >> lan[i];
  }

  for(int i=1;; i++){
    temp = 0;
    for(int k : lan){
      temp += k/i;
    }
    if(temp >= n){
      ret = i;
    }
    else{
      break;
    }
  }

  cout << ret << '\n';

  return 0;
}