#include <bits/stdc++.h>

using namespace std;

string s;
int n, cnt1, cnt2;
bool b = true;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  for(int i=0; i<n; i++){
    cin >> s;
    cnt1 = cnt2 = 0;
    b = true;
    for(char c : s){
      if(c == '(') cnt1++;
      else cnt2++;
      if(cnt2 > cnt1){
        b = false;
        break;
      } 
    }
    if(cnt1 > cnt2) b = false;
    cout << (b ? "YES" : "NO") << '\n';
  }


  return 0;
}