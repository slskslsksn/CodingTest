#include <bits/stdc++.h>

using namespace std;

int n, m, cnt1, cnt2, ret=32;
string s;
bool board[50][50], o1[8][8], o2[8][8];

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  for(int i=0; i<8; i++){
    for(int j=0; j<8; j++){
      if(i%2==0){
        o1[i][j] = j%2;
        o2[i][j] = (j+1)%2;
      }else{
        o1[i][j] = (j+1)%2;
        o2[i][j] = j%2;
      }
    }
  }

  cin >> n >> m;
  for(int i=0; i<n; i++){
    cin >> s;
    for(int j=0; j<m; j++){
      if(s[j]=='W') board[i][j] = 1;
    }
  }

  for(int k=0; k<=n-8; k++){
    for(int l=0; l<=m-8; l++){
      cnt1 = cnt2 = 0;
      for(int i=k; i<k+8; i++){
        for(int j=l;j<l+8; j++){
          if(board[i][j] != o1[i-k][j-l]) cnt1++;
          if(board[i][j] != o2[i-k][j-l]) cnt2++;
        }
      }
      ret = min(ret, min(cnt1,cnt2));
      if(ret==0) break;
    }
    if(ret==0) break;
  }
  cout << ret;

  return 0;
}