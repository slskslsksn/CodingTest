#include <bits/stdc++.h>

using namespace std;

struct SCV{
  int a,b,c;
};

int dp[64][64][64], input[3];
int attack[6][3]{
  {9,3,1}, {9,1,3},
  {3,1,9}, {3,9,1},
  {1,3,9}, {1,9,3}
};

int n;
queue<SCV> q;

int solve(int _a, int _b, int _c){
  dp[_a][_b][_c] = 1;
  q.push({_a,_b,_c});
  while(q.size()){
    int a = q.front().a;
    int b = q.front().b;
    int c = q.front().c;
    q.pop();
    for(int i=0; i<6; i++){
      int na = max(0, a-attack[i][0]);
      int nb = max(0, b-attack[i][1]);
      int nc = max(0, c-attack[i][2]);
      if(dp[na][nb][nc]) continue;
      dp[na][nb][nc] = dp[a][b][c] + 1;
      if(dp[0][0][0]) return dp[a][b][c];
      q.push({na,nb,nc});
    }
  }
  return 0;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  for(int i=0; i<n; i++) cin >> input[i];

  cout << solve(input[0], input[1], input[2]);
  return 0;
}