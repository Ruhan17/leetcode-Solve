#include<bits/stdc++.h>
using namespace std;

int minSetSize(vector<int>& arr) {
    std::vector<int> freq(1000005);
    for(int i = 0; i < arr.size(); i++){
        freq[arr[i]]++;
    }
    priority_queue<int> q;
    for(int i = 0; i < freq.size(); i++){
        if(freq[i] != 0) q.push(freq[i]);
    }
    int half = ceil(arr.size() / 2);
    int cnt = 0, size = 0;
    while(1){
        if(cnt >= half) return size;
        cnt += q.top();
        size++;
        q.pop();
    }        
}

int main(){
    int x[10] = {3,3,3,3,5,5,5,2,2,7};
    std::vector<int> v(x, x + sizeof x / sizeof x[0]);
    cout<<minSetSize(v)<<endl;
    return 0;
}