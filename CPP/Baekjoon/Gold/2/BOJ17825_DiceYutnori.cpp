#include <bits/stdc++.h>

using namespace std;

struct Node{
  int score;
  int next;
}node;

bool visited[100];
int dice[10], marker[4], ret;
Node board[100];

int get(int here, int cnt, int n){
  if(cnt == n || here == 21){
    if(here == 5 || here == 10 || here == 15) here += 20;
    return here;
  }
  return get(board[here].next, cnt+1, n);
}

void setBoard(){
  for(int i=0; i<=20; i++) board[i] = {i*2, i+1};
  board[25] = {10, 26}; board[26] = {13, 27}; board[27] = {16, 28}; board[28] = {19, 40};
  board[30] = {20, 31}; board[31] = {22, 32}; board[32] = {24, 40};
  board[35] = {30, 36}; board[36] = {28, 37}; board[37] = {27, 38}; board[38] = {26, 40};
  board[40] = {25, 41}; board[41] = {30, 42}; board[42] = {35, 20};
}

int play(int n){
  if(n==10) return 0;
  int score = 0;
  for(int i=0; i<4; i++){
    if(marker[i] == 21) continue;
    int temp_idx = marker[i];
    int marker_idx = get(temp_idx, 0, dice[n]);
    bool v = visited[marker_idx];
    if(marker_idx != 21 && visited[marker_idx]) continue;
    visited[temp_idx] = 0; visited[marker_idx] = 1;
    marker[i] = marker_idx;
    score = max(score, play(n+1) + board[marker_idx].score);
    marker[i] = temp_idx;
    visited[temp_idx] = 1; visited[marker_idx] = 0;
  }
  return score;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  for(int i=0; i<10; i++){
    cin >> dice[i];
  }

  setBoard();

  cout << play(0);


  return 0;
}