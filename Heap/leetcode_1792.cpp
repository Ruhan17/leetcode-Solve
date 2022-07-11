#include<bits/stdc++.h>
using namespace std;
typedef pair<double, int> p;

double updatedRatio(vector<vector<int>>& classes, int idx){
    classes[idx][0]++;
    classes[idx][1]++;
    return double(classes[idx][0] + 1) / double(classes[idx][1] + 1) - double(classes[idx][0]) / double(classes[idx][1]);
}

double maxAverageRatio(vector<vector<int>>& classes, int extraStudents) {
    priority_queue<p>q;
    for(int i = 0; i < classes.size(); i++){
        q.push({double(classes[i][0] + 1) / double(classes[i][1] + 1) - double(classes[i][0]) / double(classes[i][1]), i});
    }
    while(extraStudents){
        extraStudents--;
        int currHstIdx = q.top().second;
        q.pop();
        double newRatio = updatedRatio(classes, currHstIdx);
        q.push({newRatio, currHstIdx});
    }
    double maxRatio = 0.0;
    for(int i = 0; i < classes.size(); i++){
        maxRatio += (double(classes[i][0]) / double(classes[i][1]));
    }
    return maxRatio / double(classes.size());  
}

int main(){
    vector<vector<int>> vec{ {2,4}, {3,9}, {4,5}, {2,10} };
    cout<<maxAverageRatio(vec, 4)<<endl;
    return 0;
}