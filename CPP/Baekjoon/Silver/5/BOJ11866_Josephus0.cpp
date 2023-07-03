#include <bits/stdc++.h>

using namespace std;

bool J[1004];
int N, K, n, cnt, k;

int getN(){
  k = 0;
  while(k < K){
    n++, k++;
    if(n > N) n -= N;
    if(J[n]) k--;
  }
  return n;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> N >> K;
  cout << '<';
  while(cnt != N - 1){
    cout << getN() << ", ";
    J[n] = 1;
    cnt ++;
  }
  cout << getN() << '>';
  return 0;
}