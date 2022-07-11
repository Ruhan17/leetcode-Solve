#include<bits/stdc++.h>
using namespace std;

int lastStoneWeight(vector<int>& stones) {
    make_heap(stones.begin(), stones.end());
    while(true){
        if(stones.size() == 0) return 0;
        else if(stones.size() == 1) return stones.front();
        else{
            int max1 = stones.front();
            pop_heap(stones.begin(), stones.end());
            stones.pop_back();
            int max2 = stones.front();
            pop_heap(stones.begin(), stones.end());
            stones.pop_back();
            if(max1 != max2){
                stones.push_back(max1 - max2);
                push_heap(stones.begin(), stones.end());
            }
        }
    }        
}

int main(){
    vector<int> v;
    v.push_back(2);
    v.push_back(7);
    v.push_back(4);
    v.push_back(1);
    v.push_back(8);
    v.push_back(1);
    cout<<lastStoneWeight(v)<<endl;
    return 0;
}