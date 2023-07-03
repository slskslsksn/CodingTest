#include <bits/stdc++.h>

using namespace std;

map<int, int> cards;
int n, m, i;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  while(n--){
    cin >> i;
    cards[i]++;
  }
  cin >> m;
  while(m--){
    cin >> i;
    cout << cards[i] << ' ';
  }

  return 0;
}