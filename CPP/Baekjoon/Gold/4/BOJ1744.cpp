#include <bits/stdc++.h>

using namespace std;

vector<int> p, m;
int n, ret, a;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;

  for(int i=0; i<n; i++){
    cin >> a;
    if(a>0) p.push_back(a);
    else m.push_back(a);
  }

  sort(p.begin(), p.end());
  sort(m.begin(), m.end(), greater<>());

  for(int i=p.size()-1; i>0; i-=2){
    if(p[i]!=1 && p[i-1]!=1)
      ret += p[i] * p[i-1];
    else
      ret += p[i] + p[i-1];
  }
  if(p.size()%2 != 0) ret += p[0];

  for(int i=m.size()-1; i>0; i-=2){
    ret += m[i] * m[i-1];
  }
  if(m.size()%2 != 0) ret += m[0];

  cout << ret;
  return 0;
}