#include <bits/stdc++.h>

using namespace std;

vector<string> v;
int n;

bool ss(string s1, string s2){
  if(s1.size() == s2.size()){
    return s1<s2;
  }
  return s1.size() < s2.size();
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  for(int i=n; i; i--){
    string t;
    cin >> t;
    v.push_back(t);
  }
  stable_sort(v.begin(), v.end(), ss);
  v.erase(unique(v.begin(), v.end()),v.end());
  for(string s : v){
    cout << s << '\n';
  }


  return 0;
}