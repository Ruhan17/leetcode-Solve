#include<bits/stdc++.h>
using namespace std;
typedef pair<int, int> p;

bool isPossible(vector<int>& nums) {
    unordered_map<int, int> freq;
    for(int i = 0; i < nums.size(); i++){
        if(freq[nums[i]]) freq[nums[i]]++;
        else freq[nums[i]] = 1;
    }
    // map<int, int>::iterator itr;
    // for (auto x : freq)
    //   cout << x.first << " " << x.second << endl;
    unordered_map<int, int> demand;
    for(int i = 0; i < nums.size(); i++){
        if(!freq[nums[i]]) continue;
        else if(demand[nums[i]]){
            demand[nums[i]]--;
            freq[nums[i]]--;
            if(demand[nums[i] + 1]) demand[nums[i] + 1]++;
            else demand[nums[i] + 1] = 1;
        }
        else if(freq[nums[i]] && freq[nums[i] + 1] && freq[nums[i] + 2]){
            freq[nums[i]]--;
            freq[nums[i] + 1]--;
            freq[nums[i] + 2]--;
            if(demand[nums[i] + 3]) demand[nums[i] + 3]++;
            else demand[nums[i] + 3] = 1;
        }
        else return false;
    }
    return true;    
}

int main(){
    int x[8] = {1,2,3,3,4,4,5,5};
    std::vector<int> v(x, x + sizeof x / sizeof x[0]);
    cout<<isPossible(v)<<endl;
    return 0;
}