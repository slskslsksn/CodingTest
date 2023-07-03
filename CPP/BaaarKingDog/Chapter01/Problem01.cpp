/**
 * 문제 1
 * 
 * N 이하의 자연수 중에서 3의 배수이거나 5의 배수인 수를 모두 합한 값을 반화하는 함수 func1(int N)을 작성하라.
 * 
 * N은 5만 이하의 자연수이다.
 * 
 * func1(16) = 60
 * func1(34567) = 278812814
 * func1(27639) = 178254968
 * 
 */

#include <iostream>
using namespace std;

int func1(int N){
    int sum = 0;
    for(int i=1; i<=N ; i++){
        if(i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }

    
    return sum;
}

void test1(){
  cout << "****** func1 test ******\n";
  int n[3] = {16, 34567, 27639};
  int ans[3] = {60, 278812814, 178254968};
  for(int i = 0; i < 3; i++){
    int result = func1(n[i]);
    cout << "TC #" << i << '\n';
    cout << "expected : " << ans[i] << " result : " << result;
    if(ans[i] == result) cout << " ... Correct!\n";
    else cout << " ... Wrong!\n";
  }
  cout << "*************************\n\n";
}

int main(void){
    test1();
}