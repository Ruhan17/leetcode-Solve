#include<bits/stdc++.h>
using namespace std;

int countCollisions(string directions) {
    stack<char>s;
    int count = 0;
    int rCount = 0;
    for(int i = 0; i < directions.length(); i++){
        if(directions[i] == 'S'){
            while(s.size() != 0 && s.top() == 'R'){
                rCount--;
                count++;
                s.pop();
            }
            s.push('S');
        }
        else if(directions[i] == 'L'){
            if(s.size() != 0 && s.top() == 'S'){
                count++;
            }
            else if(s.size() != 0 && s.top() == 'R'){
                rCount--;
                count += 2;
                s.pop();
                s.push('S');
                count += rCount;
                rCount = 0;
            }
            else s.push('L');
        }
        else{
            s.push('R');
            rCount++;
        }
    }
    return count;
}

int main(){
    string s = "RLRSLL";
    cout<<countCollisions(s)<<endl;
    return 0;
}