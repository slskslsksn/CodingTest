#include <bits/stdc++.h>

using namespace std;

vector<pair<int, int>> v;
map<int, int> mp;
int n, c, t, idx;

bool cmp(pair<int, int> a, pair<int, int> b){
  return a.second > b.second;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n >> c;
  for(int i=0; i<n; i++){
    cin >> t;
    if(mp.find(t) != mp.end()){
      v[mp[t]].second++;
    }else{
      v.push_back({t, 1});
      mp[t] = idx++;
    }
  }

  stable_sort(v.begin(), v.end(), cmp);

  for(int i=0; i<v.size(); i++){
    while(v[i].second--) cout << v[i].first << ' ';
  }

  return 0;
}