#include <string>
#include <vector>
#include <iostream>


using namespace std;



vector<string> solution(string my_str, int n) {
    vector<string> answer;
    int count = my_str.size() / n;
    if(my_str.size() % n != 0){
        count++;
    }

    for(int i=0; i<count ; i++){
        answer.push_back(my_str.substr(i*n, n));
        cout<<answer[i]<<endl;
    }
    
    
    return answer;
}

int main(void){
    cout<< solution("abc1Addfggg4556b", 6)[0];
}