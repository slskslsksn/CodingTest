#include <bits/stdc++.h>

using namespace std;

int cnt, p, s;
char c;
stack<char> st;

int main(){
  while(1){
    while((c=getchar()) != '.'){
      cnt++;
      if(c == '('){
         st.push('(');
         p++;
      }
      else if(c == '['){ 
        st.push('[');
        s++;
      }
      else if(c == ')'){
        p--;
        if(st.empty() || st.top() != '(') break;
        st.pop();
      }
      else if(c == ']'){
        s--;
        if(st.empty() || st.top() != '[') break;
        st.pop();
      }
    }
    if(cnt == 0) break;
    printf("%s\n", p==0 && s==0 && st.empty() ? "yes" : "no");
    cnt=p=s=0;
    while(getchar() != '\n');
    while(st.size()) st.pop();
  }
  return 0;
}