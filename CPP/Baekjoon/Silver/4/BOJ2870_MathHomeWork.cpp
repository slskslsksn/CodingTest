#include <bits/stdc++.h>

using namespace std;

string s, t;
vector<string> v;
int n;

string erase0(string str){
  string ret = str;
  while(ret.front() == '0' && ret.size() !=1)
    ret.erase(0, 1);
  return ret;
}

bool comp(string a, string b){
  if(a.size() == b.size()){
    for(int i=0; i<a.size(); i++){
      if(a[i] == b[i]) continue;
      else return a[i] < b[i];
    }
  }else{
    return a.size() < b.size();
  }
  return true;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  while(n--){
    cin >> s;
    t="";
    for(int i=0; i<s.size(); i++){
      if('0'<=s[i] && s[i]<='9'){
        t+=s[i];
      } 
      else{
        if(t.size()){
          v.push_back(erase0(t));
          t = "";
        }
      }
    }
    if(t.size()) v.push_back(erase0(t));
  }

  sort(v.begin(), v.end(), comp);

  for(string i : v) cout << i << '\n';

  return 0;
}