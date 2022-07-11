#include<bits/stdc++.h>
using namespace std;
typedef pair<int,int> p;

vector<int> maxSubsequence(vector<int>& nums, int k) {
    priority_queue<p> maxQ;
    for(int i = 0; i < nums.size(); i++) maxQ.push({nums[i], i});
    priority_queue<p,vector<p>,greater<p>>minQ;
    for(int i = 0; i < k; i++){
        minQ.push({maxQ.top().second, maxQ.top().first});
        maxQ.pop();
    }
    vector<int> v;
    for(int i = 0; i < k; i++){
        v.push_back(minQ.top().second);
        minQ.pop();
    }
    return v;
}

int main(){
    int x[53] = {18,3,19,-8,30,22,-35,11,16,18,-21,32,-7,-6,38,25,-21,-1,26,-8,-37,-39,-34,6,-36,-3,26,-32,22,-20,35,-35,-30,-8,11,7,-23,-9,-22,1,33,-6,12,2,27,-27,28,-12,21,12,16,21,33};
    std::vector<int> v(x, x + sizeof x / sizeof x[0]);
    maxSubsequence(v, 50);
    return 0;
}