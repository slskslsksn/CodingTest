#include <iostream>
using namespace std;
int h, w, cnt;
int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> h >> w;
  for(int i=0; i<h; i++){
    cnt = -1;
    for(int j=0; j<w; j++){
      char c; cin >> c;
      if(c=='c') cnt = 0;
      cout << cnt << ' ';
      if(cnt != -1) cnt++;
    }
    cout << '\n';
  }

  return 0;
}