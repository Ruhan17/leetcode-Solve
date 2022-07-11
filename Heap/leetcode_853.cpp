#include<bits/stdc++.h>
using namespace std;
typedef pair<int, int> p;

int carFleet(int target, vector<int>& position, vector<int>& speed) {
    vector<p>vec;
    stack<double> s;
    for(int i = 0; i < position.size(); i++){
        vec.push_back({position[i], speed[i]});
    }
    sort(vec.begin(), vec.end());
    // for(int i = 0; i < position.size(); i++){
    //     cout<<vec[i].first<<" "<<vec[i].second<<endl;
    // }
    for(int i = vec.size() - 1; i >= 0; i--){
        double destTime = double(target - vec[i].first) / vec[i].second;
        if(s.size() == 0) s.push(destTime);
        else if(s.top() < destTime){
            s.push(destTime);
        }
    }
    return s.size();
}

int main(){
    int x[3] = {0,2,4};
    std::vector<int> nums1(x, x + sizeof x / sizeof x[0]);
    int y[3] = {4,2,1};
    std::vector<int> nums2(y, y + sizeof y / sizeof y[0]);
    cout<<carFleet(100, nums1, nums2)<<endl;
    return 0;
}