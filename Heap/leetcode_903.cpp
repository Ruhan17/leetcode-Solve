#include<bits/stdc++.h>
#include<iostream>
using namespace std;
typedef pair<long int, int> p;

vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
    priority_queue<p,vector<p>,greater<p>>q;
    for(int i = 0; i < points.size(); i++){
        long int x = points[i][0] * points[i][0];
        long int y = points[i][1] * points[i][1];
        q.push({x + y, i});
    }
    vector<vector<int>> ans;
    for(int i = 0; i < k; i++){
        ans.push_back(points[q.top().second]);
        q.pop();
    }
    return ans;
}

int main(){
    vector<vector<int>> vec{ { 1, 3 }, { -2,2 } };
    kClosest(vec, 1);
    return 0;
}