#include<bits/stdc++.h>
using namespace std;
typedef pair<int, int> p;

bool carPooling(vector<vector<int>>& trips, int capacity) {
    priority_queue<p,vector<p>,greater<p>>from;
    priority_queue<p,vector<p>,greater<p>>to;
    for(int i = 0; i < trips.size(); i++){
        from.push({trips[i][1], trips[i][0]});
        to.push({trips[i][2], trips[i][0]});
    }
    int count = 0;
    int currentPassengers = 0;
    while(count <= 1000 && from.size() > 0){
        if(to.top().first == count){
            while(to.top().first == count && to.size() > 0){
                currentPassengers -= to.top().second;
                to.pop();
            }
        }
        if(from.top().first == count){
            while(from.top().first == count && from.size() > 0){
                currentPassengers += from.top().second;
                if(currentPassengers > capacity) return false;
                from.pop();
            }
        }
        count++;
    }
    return true;   
}

int main(){
    vector<vector<int>> vec{ { 8, 2, 3 }, { 4,1,3 }, {1,3,6}, {8,4,6}, {4,4,8} };
    cout<<carPooling(vec, 12)<<endl;
    return 0;
}