#include <bits/stdc++.h>

using namespace std;

int arr[26];

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    string str;
    cin >> str;

    for(char c : str){
        arr[c-'a']++;
    }

    for(int i=0; i<26; i++){
        cout << arr[i] << ' ';
    }
    
    return 0;
}