#include <bits/stdc++.h>

using namespace std;

int n[5], ret, cnt;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  for(int i=0; i<5; i++){
    cin >> n[i];
  }

  for(int i=4; ;i++){
    cnt = 0;
    for(int j=0; j<5; j++){
      if(i % n[j] == 0) cnt++;
    }
    if(cnt >= 3){
      ret = i;
      break;
    }
  }
  cout << ret;
  return 0;
}