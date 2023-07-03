#include <iostream>

using namespace std;
using ll = long long;

int ay, am, ad, by, bm, bd;
ll ald, bld;
int days[11] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30};
int pdays[12];
bool over = false;

bool isLeap(int y){
  return (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0));
}

int getLeap(int y, int m){
  int leap = 0;
  leap = (y-1)/4 - (y-1)/100 + (y-1)/400;
  if(isLeap(y) && m > 2) leap++;
  return leap;
}

int getLd(int y, int m, int d){
  int leap = getLeap(y, m);
  return (y-1)*365 + pdays[m-1] + d + leap;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  for(int i=1; i<12; i++){
    pdays[i] = days[i-1] + pdays[i-1];
  }

  cin >> ay >> am >> ad >> by >> bm >> bd;

  ald = getLd(ay, am, ad);
  bld = getLd(by, bm, bd);

  ll dd = bld - ald;
  if(dd>=365243){
    cout << "gg";
  }else{
    cout << "D-" << dd;
  }
  // 연도: y-1 * 365
  // 월: pdays[m-1];
  // 일: d
  // 윤일 - getLeap(y-1), 3월 이상이고 윤년 맞으면 +1;
}

// int main(){
//   ios_base::sync_with_stdio(false);
//   cin.tie(NULL);
//   cout.tie(NULL);

//   cin >> year1 >> m1 >> d1 >> year2 >> m2 >> d2;
//   if(year2 - 1000 > year1){
//     over = true;
//   }else if(year2 - 1000 == year1){
//     if(m2 > m1){
//       over = true;
//     }else if(m2 == m1){
//       if(d2 >= d1){
//         over = true;
//       }
//     }
//   }

//   if(over){
//     cout << "gg";
//     return 0;
//   }

//   for(int i=1; i<12; i++){
//     pdays[i] = days[i-1] + pdays[i-1];
//   }

//   ld1 = ((year1-1)*365 + ((year1)/4 - year1/100 + year1/400)) + pdays[m1-1] + d1;
//   ld2 = ((year2-1)*365 + ((year2)/4 - year2/100 + year2/400)) + pdays[m2-1] + d2;

//   ll ret = ld2 - ld1;
//   cout << "D-" << ret;

//   return 0;
// }