#include<bits/stdc++.h>
using namespace std;

int maxProduct(vector<int>& nums) {
    make_heap(nums.begin(), nums.end());
    int max1 = nums.front();
    pop_heap(nums.begin(), nums.end());
    int max2 = nums.front();
    return (max1 - 1) * (max2 - 1);         
}

int main(){
    int x[2] = {3,7};
    std::vector<int> v(x, x + sizeof x / sizeof x[0]);
    cout<<maxProduct(v)<<endl;
    return 0;
}