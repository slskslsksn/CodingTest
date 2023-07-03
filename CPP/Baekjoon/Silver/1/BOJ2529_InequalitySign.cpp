#include <bits/stdc++.h>

using namespace std;

int visited[10],k;
long long minv=9876543210,maxv=0;
char a[9];

string s1, s2;

bool can(char op, int n1, int n2){
  return  op == '<' ? n1 < n2 : n1 > n2;
}

void dfs(string str, int cnt){
  if(cnt == k+1){
    long long ll = stold(str);
    if(ll<minv){
      minv = ll;
      s2 = str;
    }else if(ll>maxv){
      maxv = ll;
      s1 = str;
    }
    return;
  }
  int idx = cnt-1;
  int n = str[idx]-'0';
  visited[n] = 1;
  for(int i=0; i<=9; i++){
    if(visited[i] || !can(a[idx], n, i)) continue;
    string temp = str;
    temp += i+'0';
    dfs(temp, cnt+1);
  }
  visited[n] = 0;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> k;
  for(int i=0; i<k; i++){
    cin >> a[i];
  }

  for(int i=0; i<=9; i++){
    string s;
    s+=i+'0';
    dfs(s, 1);
  }
  cout << s1 << '\n' << s2;

  return 0;
}