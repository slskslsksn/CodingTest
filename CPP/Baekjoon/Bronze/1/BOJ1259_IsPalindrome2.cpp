#include <algorithm>
#include <string>
#include <iostream> 
using namespace std;

string s1, s2;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  for(;;){
    cin >> s1;
    if(atoi(s1.c_str()) == 0) break;
    s2 = s1;
    reverse(s2.begin(), s2.end());
    if(s1 == s2) cout << "yes" << '\n';
    else cout << "no" << '\n';
  }

  return 0;
}