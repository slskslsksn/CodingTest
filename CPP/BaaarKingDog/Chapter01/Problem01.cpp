/**
 * ���� 1
 * 
 * N ������ �ڿ��� �߿��� 3�� ����̰ų� 5�� ����� ���� ��� ���� ���� ��ȭ�ϴ� �Լ� func1(int N)�� �ۼ��϶�.
 * 
 * N�� 5�� ������ �ڿ����̴�.
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