#include <bits/stdc++.h>

using namespace std;

pair<int, int> ret;
vector<int> v;
int input[9], sum = 0;

void solve(){
    for(int i=0; i<9; i++){
        for(int j=0; j<i; j++){
            if(sum - input[i] - input[j] == 100){
                ret = {i, j};
                return;
            }
        }
    }
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    for(int i=0; i<9; i++){
        cin >> input[i];
        sum += input[i];
    }
    sort(input, input+9);
    solve();
    for(int i=0; i<9; i++){
        if(i == ret.first || i == ret.second) continue;
        v.push_back(input[i]);
    }
    
    for(int i: v) cout << i << ' ';
    cout << '\n';
    return 0;
}