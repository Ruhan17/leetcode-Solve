#include<bits/stdc++.h>
using namespace std;

vector<double> getCollisionTimes(vector<vector<int>>& cars) {
    vector<double>result;
    stack<pair<vector<int>, double>>s;
    for(int i = cars.size() - 1; i >= 0; i--){
        while(s.size() != 0 && (cars[i][1] <= s.top().first[1] || double(s.top().first[0] - cars[i][0]) / (cars[i][1] - s.top().first[1]) >= s.top().second)){
            s.pop();
        }
        if(s.size() == 0){
            vector<int>vect;
            vect.push_back(cars[i][0]);
            vect.push_back(cars[i][1]);
            s.push({vect, std::numeric_limits<double>::max()});
            result.push_back(-1);
        }
        else{
            double collisionTime = double(s.top().first[0] - cars[i][0]) / (cars[i][1] - s.top().first[1]);
            vector<int>vect;
            vect.push_back(cars[i][0]);
            vect.push_back(cars[i][1]);
            s.push({vect, collisionTime});
            result.push_back(collisionTime);
        }
    }
    // for(int i = result.size() - 1; i >= 0; i--){
    //     cout<<result[i]<<" ";
    // }        
    reverse(result.begin(), result.end());
    return result;
}

int main(){
    vector<vector<int>> vec{{3,4},{5,4},{6,3},{9,1}};
    getCollisionTimes(vec);
    return 0;
}