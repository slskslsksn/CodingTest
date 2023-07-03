#include <bits/stdc++.h>

using namespace std;

int n, p,f,s,v;
int ret = INT_MAX, mp,mf,ms,mv,sum;

struct A{
  int p,f,s,v,c;
}a[16];

map<int, vector<vector<int>>> ret_v;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n >> p >> f >> s >> v;
  for(int i=0; i<n; i++){
    cin >> a[i].p >> a[i].f >> a[i].s >> a[i].v >> a[i].c;
  }

  for(int i=1; i<(1<<n); i++){
    mp=mf=ms=mv=sum=0;
    vector<int> vv;
    for(int j=0; j<n; j++){
      if(i & (1<<j)){
        vv.push_back(j+1);
        mp += a[j].p;
        mf += a[j].f;
        ms += a[j].s;
        mv += a[j].v;
        sum += a[j].c;
      }
    }

    if(mp >= p && mf >= f && ms >= s && mv >= v){
      if(ret >= sum){
        ret = sum;
        ret_v[ret].push_back(vv);
      }
    }
  }

  if(ret == INT_MAX) cout << -1 << '\n';
  else{
    sort(ret_v[ret].begin(), ret_v[ret].end());
    cout << ret << '\n';
    for(int a : ret_v[ret][0]){
      cout << a << ' ';
    }
  }

  return 0;
}