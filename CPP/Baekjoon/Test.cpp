#include <tchar.h>

#include <iostream>
#include <map>
#include <string>
#include <vector>

using namespace std;

map<string, char> num{
    {"one", '1'}, {"two", '2'},   {"three", '3'}, {"four", '4'}, {"five", '5'},
    {"six", '6'}, {"seven", '7'}, {"eight", '8'}, {"nine", '9'}, {"zero", '0'},
};

int gcd(int a, int b) {
  if (a % b == 0)
    return b;
  else
    return gcd(b, a % b);
}

int x, d;

void addNum(string str) {
  switch (str.length()) {
    case 1:
      if (str[0] == 'x')
        x += 1;
      else
        d += str[0] - '0';
      return;
    default:
      if (str[str.length() - 1] == 'x') {
        str.pop_back();
        x += stoi(str);
      } else {
        d += stoi(str);
      }
  }
}

int main() {
  string path = "asdf";
  cout << path;
}