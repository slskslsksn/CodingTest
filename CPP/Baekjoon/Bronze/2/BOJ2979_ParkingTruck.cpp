#include <bits/stdc++.h>

using namespace std;
int FEE[3], in, out, t[101], fee;
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    cin >> FEE[0] >> FEE[1] >> FEE[2];

    for(int i=0; i<3; i++){
        cin >> in >> out;
        for(int j=in; j<out; j++){
            t[j]++;
        }
    }

    for(int i : t){
        fee += i * FEE[i-1];
    }

    cout << fee;


    return 0;
}
