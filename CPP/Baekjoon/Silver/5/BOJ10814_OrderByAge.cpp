#include <bits/stdc++.h>

using namespace std;

int N, age;
string name;
vector<pair<int, string>> v;

bool comp(pair<int, string> x, pair<int, string> y){
  return x.first < y.first;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> N;
  while(N--){
    cin >> age >> name;
    v.push_back({age, name});
  }
  stable_sort(v.begin(), v.end(), comp);
  for(pair<int, string>p : v){
    cout << p.first << ' ' << p.second << '\n';
  }

  return 0;
}