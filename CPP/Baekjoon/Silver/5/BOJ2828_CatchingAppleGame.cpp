#include <bits/stdc++.h>

using namespace std;

int N, M, J, t, l, r, ret;

int main(){
  cin >> N >> M >> J;
  l=1;
  for(int i=0; i<J; i++){
    r = l + M - 1;
    cin >> t;
    if(t < l){
      ret += l-t;
      l = t;
    }else if(t > r){
      ret += t-r;
      l += t-r;
    }else continue;
  }
  cout << ret;
  return 0;
}

// struct Basket{
//   int left;
//   int right;
// };

// Basket b;
// int N, M, J, a[21], ret;

// int main(){
//   ios_base::sync_with_stdio(false);
//   cin.tie(NULL);
//   cout.tie(NULL);

//   cin >> N >> M >> J;

//   for(int i=1; i<=J; i++){
//     cin >> a[i];
//   }
  
//   b.left = 1;
//   b.right = M;
//   a[0] = 1;

//   for(int i=1; i<=J; i++){
//     if(a[i]==a[i-1]) continue;
//     else if(a[i]>a[i-1]){
//       while(b.right<a[i]){
//         b.left++; b.right++;
//         ret++;
//       }
//     }else{
//       while(b.left>a[i]){
//         b.left--; b.right--;
//         ret++;
//       }
//     }
//   }
//   cout << ret;
//   return 0;
// }