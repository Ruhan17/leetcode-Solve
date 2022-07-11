#include<bits/stdc++.h>
using namespace std;

int kthLargestValue(vector<vector<int>>& matrix, int k) {
     priority_queue<int,vector<int>,greater<int>>q;
     for(int i = 0; i < matrix.size(); i++){
        for(int j = 0; j < matrix[i].size(); j++){
            int top = 0;
            int left = 0;
            int topLeft = 0;
            if(i > 0) top = matrix[i - 1][j];
            if(j > 0) left = matrix[i][j - 1];
            if(i > 0 && j > 0) topLeft = matrix[i - 1][j - 1];
            matrix[i][j] = top ^ left ^ topLeft ^ matrix[i][j];
            q.push(matrix[i][j]);
            if(q.size() > k) q.pop();
        }
     }
     return q.top();   
}

int main(){
    vector<vector<int>> vec{ { 5, 2 }, { 1,6 } };
    cout<<kthLargestValue(vec, 3)<<endl;
    return 0;
}