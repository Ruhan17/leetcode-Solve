#include<bits/stdc++.h>
using namespace std;

vector<string> findRelativeRanks(vector<int>& score) {
    std::vector<int> idx(1000005);

    for(int i = 0; i < score.size(); i++){
        idx[score[i]] = i;
    }

    std::vector<std::string> ans(score.size());

    make_heap(score.begin(), score.end());

    int i = 0;
    while(score.size() != 0){
        i++;
        int max = score.front();
        pop_heap(score.begin(), score.end());
        score.pop_back();
        if(i > 3){
            ans[idx[max]] = to_string(i);
        }
        else{
            if(i == 1) ans[idx[max]] = "Gold Medal";
            else if(i == 2) ans[idx[max]] = "Silver Medal";
            else ans[idx[max]] = "Bronze Medal";

        }
    }
    return ans;     
}

int main(){
    int x[5] = {10,3,8,9,4};
    std::vector<int> v(x, x + sizeof x / sizeof x[0]);
    findRelativeRanks(v);
    return 0;
}