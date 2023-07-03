#include <iostream>
#include <map>

using namespace std;

struct X{
  int z;
  int o;
};

int t, n, o, z;
map<int, X> mp;

X fibonacci(int n) {
  if(mp.count(n)) return mp[n];
  X x;

  if (n == 0) {
    x.z = 1; x.o = 0;
  } else if (n == 1) {
    x.z = 0; x.o = 1;
  } else {
    X t1, t2;
    t1 = fibonacci(n-1);
    t2 = fibonacci(n-2);
    x.z = t1.z + t2.z;
    x.o = t1.o + t2.o;
  }
  mp[n] = x;
  return x;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> t;
  for(int i=0; i<t; i++){
    cin >> n;
    o = z = 0;
    X x = fibonacci(n);
    cout << x.z << ' ' << x.o << '\n';
  }

  return 0;
}