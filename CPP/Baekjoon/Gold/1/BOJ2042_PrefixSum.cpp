#include <bits/stdc++.h>

using namespace std;
using ll = long long;
vector<ll> v;
vector<ll> av;
int N, M, K;
ll a, b, c;

void printA(){
  cout << '[';
  for(ll i : v){
    cout << i << ' ';
  }
  cout << "] [";
  for(ll i : av){
    cout << i << ' ';
  }
  cout << "]\n";
}

void change(){
  ll t = c-v[b-1];
  v[b-1] = c;
  for(int i=b; i<av.size(); i++){
    av[i] += t;
  }
  printA();
}

void printSum(){
  cout << (av[c] - av[b-1]) << '\n';
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> N >> M >> K;

  for(int i=0; i<N; i++){
    ll n;
    cin >> n;
    v.push_back(n);
  }

  av.push_back(0);
  for(int i=0; i<N; i++){
    av.push_back(av[i] + v[i]);
  }
  printA();
  for(int i=0; i<M+K; i++){
    cin >> a >> b >> c;
    if(a == 1){
      change();
    }else{
      printSum();
    }
  }

  return 0;
}