#include <bits/stdc++.h>

using namespace std;

string s, ret;
int v, c;
bool isv, incv, con;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  while(1){
    cin >> s;
    if(s == "end") break;
    v=0; c=0; isv=0; incv=0; con=0;
    ret="";
    for(int i=0; i<s.size(); i++){
      if(s[i]=='a' || s[i]=='e' || s[i]=='i'  || s[i]=='o'|| s[i]=='u'){
         incv = 1;
         isv = 1;
      }else{
        isv = 0;
      }
      if(isv){c=0; v++;}
      else{c++; v=0;}
      if(c>=3 || v>=3) break;
      if(i!=0 && s[i] == s[i-1]){
        if(!(s[i] == 'e' || s[i] == 'o')) con = 1;
      }
      if(con) break;
    }

    if(con || c>=3 || v>=3|| !incv) ret = " not";

    cout << '<' << s << "> is" << ret << " acceptable.\n";
  }

  return 0;
}