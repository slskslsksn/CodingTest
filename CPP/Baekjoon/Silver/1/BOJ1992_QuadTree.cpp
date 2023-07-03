#include <bits/stdc++.h>

using namespace std;

int n;
string s;
char a[66][66];

string quard(int y, int x, int size){
  if(size == 1) return string(1, a[y][x]);
  char b = a[y][x];
  string ret = "";
  for(int i=y; i<y+size; i++){
    for(int j=x; j<x+size; j++){
      if(a[i][j] != b){
        ret += '(';
        int size2 = size / 2;
        ret += quard(y, x, size2);
        ret += quard(y, x+size2, size2);
        ret += quard(y+size2, x, size2);
        ret += quard(y+size2, x+size2, size2);
        ret += ')';
        return ret;        
      }
    }
  }
  return string(1, b);
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  for(int i=0; i<n; i++){
    cin >> s;
    for(int j=0; j<n; j++){
      a[i][j] = s[j];
    }
  }

  cout << quard(0, 0, n);

  return 0;
}