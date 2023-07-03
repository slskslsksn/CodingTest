#include <bits/stdc++.h>

using namespace std;

stack<int> s;
int n, a[1000000], nge[1000000];

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  for(int i=0; i<n; i++){
    cin >> a[i];
    nge[i] = -1;
    while(s.size() && a[s.top()] < a[i]){
      nge[s.top()] = a[i]; s.pop();
    }
    s.push(i);
  }
  for(int i=0; i<n; i++) cout << nge[i] << ' ';
  return 0;
}