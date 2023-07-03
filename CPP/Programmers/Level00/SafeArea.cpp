#include <bits/stdc++.h>

using namespace std;

int dx[] = {1, 0, -1, 0, 1, 1, -1, -1};
int dy[] = {0, 1, 0, -1, 1, -1, -1, 1};

int mp[101][101];
int n;

void go(int x, int y) {
  mp[x][y] = 1;
  for (int i = 0; i < 8; i++) {
    int nx = x + dx[i];
    int ny = y + dy[i];
    if (nx < 0 || nx > n || ny < 0 || ny > n) continue;
    if (mp[nx][ny] == 2 || mp[nx][ny] == 1) continue;
    if (mp[nx][ny] == 0) mp[nx][ny] = 2;
  }
}

int solution(vector<vector<int>> board) {
  int answer = 0;
  n = board[0].size();
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      if (board[i][j] == 1) go(i, j);
    }
  }

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      if (mp[i][j] == 0) answer++;
    }
  }

  return answer;
}

int main() {
  vector<vector<int>> v = {{1, 1, 1, 1, 1},
                           {1, 1, 1, 1, 1},
                           {1, 1, 1, 1, 1},
                           {1, 1, 1, 1, 1},
                           {1, 1, 1, 1, 1}};
  cout << solution(v);

  return 0;
}