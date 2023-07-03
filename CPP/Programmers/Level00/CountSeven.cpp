#include <string>
#include <vector>
#include <iostream>

using namespace std;



int solution(vector<int> array) {
    int answer = 0;

    for(int number : array){
        string numstr = to_string(number);
        for(int i=0; i<numstr.size(); i++){
            if(numstr[i] == '7' ){
                answer++;
            }
        }
    }

    return answer;
}

int main(void){
    cout<< solution({7, 77, 17});
}