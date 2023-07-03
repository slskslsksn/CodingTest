#include <string>
#include <vector>
#include <iostream>


using namespace std;



int solution(string A, string B) {
    int answer = -1;

    for(int i=0; i<A.size(); i++){
        if(B.compare(A) == 0){
            answer = i;
            break;
        }
        string temp;
        temp = A.back();
        A.insert(0, temp);
        A.pop_back();
    }
    

    return answer;
}

int main(void){
    cout<< solution("hello", "ohell");
}