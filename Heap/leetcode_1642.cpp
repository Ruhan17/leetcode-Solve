#include<bits/stdc++.h>
using namespace std;

int furthestBuilding(vector<int>& heights, int bricks, int ladders) {
    if(heights.size() == 1) return 0;
    priority_queue<int,vector<int>,greater<int>>q;
    for(int i = 1; i < heights.size(); i++){
        if(heights[i] - heights[i - 1] <= 0) continue;
        q.push(heights[i] - heights[i - 1]);
        if(q.size() > ladders){
            bricks -= q.top();
            q.pop();
            if(bricks < 0) return i - 1;
        }
    }
    return heights.size() - 1;
}

int main(){
    int x[4] = {14,3,19,3};
    std::vector<int> nums1(x, x + sizeof x / sizeof x[0]);
    cout<<furthestBuilding(nums1, 17, 0)<<endl;
    return 0;
}