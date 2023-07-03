// #include <bits/stdc++.h>

// using namespace std;

// const int MM = 48;

// struct Start{
//   int team;
//   int mm;
//   int ss;
// };

// int n, team, mm[3], ss[3], score;
// char str[8];

// Start start;

// int toint(char n1, char n2){
//   int ret = (n1-'0')*10 + n2-'0';
//   return ret;
// }

// void med(int team){
//   mm[team] += ss[team]/60;
//   ss[team] %= 60;
//   if(ss[team] < 0){
//     mm[team] -= 1;
//     ss[team] += 60;
//   }
// }

// int main(){
//   scanf("%d\n", &n);
//   while(n--){
//     char c;
//     for(int i=0; c=getchar(), c!='\n'; i++){
//       str[i] = c;
//     }
//     team = str[0]-'0';
//     score += team == 1? 1 : -1;
//     mm[0] = toint(str[2], str[3]);
//     ss[0] = toint(str[5], str[6]);
//     if((score==1 || score==-1) && start.team == 0){
//       start.team = team;
//       start.mm = mm[0];
//       start.ss = ss[0];
//     }else if(score == 0){
//       mm[start.team] += mm[0] - start.mm;
//       ss[start.team] += ss[0] - start.ss;
//       start.team = start.mm = start.ss = 0;
//     }
//   }
//   if(start.team){
//     mm[start.team] += 48 - start.mm;
//     ss[start.team] += 00 - start.ss;
//   }
//   med(1); med(2);
//   printf("%02d:%02d\n", mm[1], ss[1]);
//   printf("%02d:%02d\n", mm[2], ss[2]);
//   return 0;
// }


#include <bits/stdc++.h>

using namespace std;

struct Start{
  int team;
  int ss;
};

int n, team, score, ss[3];
string str;
Start start{0,0};

int toint(char c1, char c2){
  return (c1-'0')*10 + c2-'0';
}

string print(int ss){
  string ret = "";
  int m = ss/60;
  int s = ss%60;
  if(m/10 == 0) ret+='0';
  ret += to_string(m);
  ret += ':';
  if(s/10 == 0) ret+='0';
  ret += to_string(s);
  return ret;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;
  while(n--){
    cin >> team >> str;
    ss[0] = 0;
    ss[0] += toint(str[0], str[1]) * 60;
    ss[0] += toint(str[3], str[4]);
    score += team == 1 ? 1 : -1;
    if(start.team == 0 && (score==1 || score==-1)){
      start.team = team;
      start.ss = ss[0];
    }else if(score==0){
      ss[start.team] += ss[0] - start.ss;
      start.team = start.ss = 0;
    }
  }
  if(start.team) ss[start.team] += 48*60 - start.ss;
  cout << print(ss[1]) << '\n' << print(ss[2]);
  return 0;
}