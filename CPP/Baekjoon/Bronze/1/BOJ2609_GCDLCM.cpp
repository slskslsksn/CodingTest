#include <cstdio>

int gcd(int a, int b){
  if(a%b==0) return b;
  return gcd(b, a%b);
}

int main(){
  int a,b,c,d;
  scanf("%d%d",&a,&b);
  c = gcd(a,b);
  d = a*b/c;
  printf("%d\n%d",c,d);
}