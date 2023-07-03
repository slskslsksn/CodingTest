#include <bits/stdc++.h>

using namespace std;

int arr[1000000], n;

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  for(int i=0; i<n; i++){
    cin >> arr[i];
  }

  sort(arr, arr+n);
  for(int i=0; i<n; i++){
    cout << arr[i] << '\n';
  }

  return 0;
}