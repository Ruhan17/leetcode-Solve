#include<bits/stdc++.h>
using namespace std;
typedef pair<int, vector<int>> p;

//Here The Target is to maximize the upper bound & minimize the lower bound 
//so that their difference becomes minimum

vector<int> smallestRange(vector<vector<int>>& nums) {
    // We use priority queue to find min element 
    // & multiset to find max element
    priority_queue<p,vector<p>,greater<p>>q;
    multiset<int, greater<int> > ms;
    // Get all the first elements
    for(int i = 0; i < nums.size(); i++){
        // We use priority queue to find min element 
        // & multiset to find max element
        vector<int>vec;
        vec.push_back(i);
        vec.push_back(0);
        q.push({nums[i][0], vec});
        ms.insert(nums[i][0]);
    }
    long long int minDiff = std::numeric_limits<long long int>::max();
    // the following two variables will be the actual answer
    int lower = -1;
    int upper = -1;
    while(true){
        int min = q.top().first;
        int max = *(ms.begin());
        int diff = max - min;
        if(diff < minDiff){
            minDiff = diff;
            lower = min;
            upper = max;
        }
        int k = q.top().second[0];
        int idx = q.top().second[1];
        // We stop whenever the minimum element is the last
        // element of its vector
        if(idx == nums[k].size() - 1) break;
        q.pop();
        ms.erase(ms.find(min));
        // As we want to maximize the minimum element,
        // We get the next element of the minimum one
        vector<int>vec;
        vec.push_back(k);
        vec.push_back(idx + 1);
        q.push({nums[k][idx + 1], vec});
        ms.insert(nums[k][idx + 1]);
    }
    cout<<lower<<" "<<upper<<endl;
    vector<int>ans;
    ans.push_back(lower);
    ans.push_back(upper);
    return ans;
}

int main(){
    vector<vector<int>> vec{{1,2,3},{1,2,3},{1,2,3}};
    smallestRange(vec);
    return 0;
}