// #include <bits/stdc++.h>

// using namespace std;

// int a,b,c;

// int main(){
//   ios_base::sync_with_stdio(false);
//   cin.tie(NULL);
//   cout.tie(NULL);

//   while(1){
//     cin >> a >> b >> c;
//     if(a==0) break;
//     bool r = false;
//     if(a > b && a > c){
//       r = a*a == b*b + c*c;
//     }else if(b>a && b>c){
//       r = b*b == a*a + c*c;
//     }else{
//       r = c*c == a*a + b*b;
//     }
//     cout << (r?"right\n":"wrong\n");
//   }

//   return 0;
// }

#include <stdio.h>
int a,b,c;
int main(){
  while(scanf("%d%d%d",&a,&b,&c), a) // 입력 받고 a 0이면 out
    puts(a*a==b*b+c*c || b*b==a*a+c*c || c*c==a*a+b*b ? "right":"wrong"); // 직각삼각형이면 셋중에 하나는 true기 때문에 가능
}