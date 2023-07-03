#include <bits/stdc++.h>

using namespace std;

int N, s, t = -4000, l = 4000, m, a, c;
int arr[5000002];
int arr2[8001];

int get(){
  int ret = 40000;
  for(int i=0, cnt = 0; i<8001 && cnt < 2; i++){
    if(arr2[i] == c){
      cnt++;
      ret = i-4000;
    }
  }
  return ret;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> N;

  for(int i=0; i<N; i++){
    int temp;
    cin >> temp;
    if(temp > t) t = temp;
    if(temp < l) l = temp;
    arr[i] = temp;
    int temp2 = temp+4000;
    arr2[temp2]++;
    if(c < arr2[temp2]) c = arr2[temp2];
    s += temp;
  }
  sort(&arr[0], &arr[0]+N);
  
  cout << fixed;
  cout.precision(0);
  a = round((double)s/N);
  cout << a << '\n' << arr[N/2] << '\n' << get() << '\n' << t-l;


  return 0;
}