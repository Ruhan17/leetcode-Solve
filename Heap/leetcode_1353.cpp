#include<bits/stdc++.h>
using namespace std;
typedef pair<int, vector<int>> p;

bool sortcol(const vector<int>& v1, const vector<int>& v2)
{
    if(v1[0] == v2[0]) return v1[1] < v2[1];
    return v1[0] < v2[0];
}

int maxEvents(vector<vector<int>>& events) {
    int ans = 0;
    priority_queue<int,vector<int>,greater<int>>q;
    sort(events.begin(), events.end(), sortcol);
    int currentDay = events[0][0];
    int max = 0;
    for(int i = 0; i < events.size(); i++){
        if(events[i][1] > max) max = events[i][1];
    }
    int totalDays = max;
    int eventId = 0;
    while(currentDay <= totalDays){
        // Push to the queue all available events
        while(eventId < events.size() && events[eventId][0] <= currentDay){
            q.push(events[eventId][1]);
            eventId++;
        }
        // Pop those events which are expired
        while(q.size() != 0 && q.top() < currentDay) q.pop();
        // Attend one event (which ends more quickly than other available events) at a particular day
        if(q.size() != 0){
            ans++;
            q.pop();
        }
        else if(eventId >= events.size()) break;
        currentDay++;
    }
    return ans; 
}

int main(){
    vector<vector<int>> vec{{1,2},{2,3},{3,3},{1,5},{1,5}};
    cout<<maxEvents(vec)<<endl;
    return 0;
}