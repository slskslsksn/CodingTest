#include <bits/stdc++.h>

using namespace std;

int arr[202];

int solution(vector<vector<int>> lines) {
    int answer = 0;
    for(auto& v: lines){
        for(int i=v[0]; i<v[1]; i++){
            arr[i+100]++;
        }
    }
    for(auto i : arr){
        if(i > 1 ) answer++;
    }
    return answer;
}

int main(){
    vector<vector<int>> v = {{0,1},{2,5},{3,9}};

    cout << solution(v) << '\n';

    return 0;
}