#include<bits/stdc++.h>
using namespace std;
typedef pair<int, int> p;

bool sortcol(const vector<int>& v1, const vector<int>& v2)
{
    return v1[0] < v2[0];
}

vector<int> getOrder(vector<vector<int>>& tasks) {
      vector<int> ans;
      if(tasks.size() == 1){
        ans.push_back(0);
        return ans;
      }
      for(int i = 0; i < tasks.size(); i++){
        tasks[i].push_back(i);
      }
      sort(tasks.begin(), tasks.end(), sortcol); 
      long long int time = tasks[0][0];
      priority_queue<p,vector<p>,greater<p>>taskDuration;
      taskDuration.push({tasks[0][1], tasks[0][2]});
      int i = 1;
      while(taskDuration.size() != 0 || i != tasks.size()){
        while(i < tasks.size() && time >= tasks[i][0]){
            taskDuration.push({tasks[i][1], tasks[i][2]});
            i++;
        }
        if(taskDuration.size() != 0){
            ans.push_back(taskDuration.top().second);
            time += taskDuration.top().first;
            taskDuration.pop();
        }
        else{
            time = tasks[i][0];
        }
      }
      for(int i = 0; i < ans.size(); i++) cout<<ans[i]<<" ";
      return ans;  
}

int main(){
    vector<vector<int>> vec{ {19,13}, {16, 9}, {21,10}, {32,25}, {37,4}, {49, 24}, {2, 15}, 
                             {38, 41}, {37, 34}, {33,6}, {45,4}, {18,18}, {46,39}, {12, 24}  };
    getOrder(vec);
    return 0;
}