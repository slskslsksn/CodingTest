#include <bits/stdc++.h>
using namespace std;


int n, sum1=INT_MAX, sum2=INT_MAX;
int population[11], cnt[11];
bool adj[11][11];

int main(){
  scanf("%d",&n);
  for(int i=1; i<=n; i++){
    scanf("%d", &population[i]);
  }

  for(int i=1; i<=n; i++){
    scanf("%d", &cnt[i]);
    for(int j=0; j<cnt[i]; j++){
      int tmp;
      scanf("%d", &tmp);
      adj[i][tmp] = 1;
    }
  }
  
  // 1번구역부터 ?

  return 0;
}