#include <stdio.h>
int N, ret = -1;
int main(){
  scanf("%d", &N);
  for(int i = N/5; i >= 0; i--){
    int t = N-(5*i);
    if(t%3 == 0){
      ret = i + t/3;
      break;
    }
  }

  printf("%d", ret);

  return 0;
}