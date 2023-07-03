#include <bits/stdc++.h>

using namespace std;

vector<int> a;
int N, M;
double sum;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> N;
  for(int i=0; i<N; i++){
    int n;
    cin >> n;
    if(M < n){
      M = n;
    }
    a.push_back(n);
  }

  for(int i : a){
    sum += (double)i/M*100;
  }
  cout << ((double)sum/N);
  return 0;
}