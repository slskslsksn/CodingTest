#include <string>
#include <vector>
#include <iostream>

using namespace std;


int solution(vector<string> babbling) {
    int answer = 0;
    int length = babbling.size();
    string words[] = {"aya", "ye", "ma", "woo"};
    // for(int i=0; i<length; i++){
    //     string temp = babbling.at(i);
    //     for(int j=0; j<4; j++){
    //         if(temp.find(words[j]) != string::npos){
    //             temp.erase(temp.find(words[j]), words[j].size());
    //         }
    //         cout << temp << '\n';     
    //         if(temp == ""){
    //             answer++;
    //             cout << answer << '\n';
    //             break;
    //         }
    //     }
    // }

    for(string temp : babbling){
        for(int i=0; i<4; i++){
            if(temp.find(words[i]) == 0){
                temp.erase(0, words[i].size());
                i = 0;
            }
            if(temp == ""){
                answer++;
                break;
            }
        }
    }
    return answer;
}

int main(void){
    vector<vector<string>> babllings ;
    vector<string> bablling1 = {"aya", "yee", "u", "maa", "wyeoo"};
    vector<string> bablling2 = {"ayaye", "uuuma", "ye", "yemawoo", "ayaa"};
    babllings.push_back(bablling1);
    babllings.push_back(bablling2);

    int ans[2] = {1, 3};


    for(int i = 0; i < babllings.size(); i++){
        int result = solution(babllings.at(i));
        cout << "TC #" << i << '\n';
        cout << "expected : " << ans[i] << " result : " << result;
        if(ans[i] == result) cout << " ... Correct!\n";
        else cout << " ... Wrong!\n";
    }
    
    return 0;
}