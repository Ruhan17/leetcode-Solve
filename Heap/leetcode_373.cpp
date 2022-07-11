#include<bits/stdc++.h>
using namespace std;
typedef pair<int, vector<int>> p;

vector<vector<int>> kSmallestPairs(vector<int>& nums1, vector<int>& nums2, int k) {
    priority_queue<p,vector<p>,greater<p>>q;
    int min;
    if(k < nums1.size()) min = k;
    else min = nums1.size();
    for(int i = 0; i < min; i++){
        vector<int> vec;
        vec.push_back(nums1[i]);
        vec.push_back(nums2[0]);
        vec.push_back(0);
        int sum = nums1[i] + nums2[0];
        q.push({sum, vec});
    }
    vector<vector<int>> ans;
    while(ans.size() != k && ans.size() != nums1.size() * nums2.size()){
        vector<int> vec = q.top().second;
        int firstNum = vec[0];
        int secondNum = vec[1];
        int idx = vec[2];
        vector<int> v;
        v.push_back(firstNum);
        v.push_back(secondNum);
        ans.push_back(v);
        q.pop();
        if(idx + 1 < nums2.size()){
            int sum = firstNum + nums2[idx + 1];
            vector<int> temp;
            temp.push_back(firstNum);
            temp.push_back(nums2[idx + 1]);
            temp.push_back(idx + 1);
            q.push({sum, temp});
        }
    }
    // for(int i = 0; i < ans.size(); i++){
    //     cout<<ans[i][0]<<" "<<ans[i][1]<<endl;
    // } 
    return ans;
}

int main(){
    int x[2] = {1,2};
    std::vector<int> nums1(x, x + sizeof x / sizeof x[0]);
    int y[2] = {3, 4};
    std::vector<int> nums2(y, y + sizeof y / sizeof y[0]);
    kSmallestPairs(nums1,nums2,10);
    return 0;
}