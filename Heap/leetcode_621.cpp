#include<bits/stdc++.h>
using namespace std;
typedef pair<int, int> p;

int leastInterval(vector<char>& tasks, int n) {
    vector<int> freq(26, 0);
    priority_queue<int> pq;
    queue<p> q;
    for(int i = 0; i < tasks.size(); i++){
        freq[int(tasks[i]) - 65]++;
    }
    for(int i = 0; i < 26; i++){
        if(freq[i] != 0) pq.push(freq[i]);
    }
    int time = 0;
    while(pq.size() != 0 || q.size() != 0){
        time++;
        if(q.size() != 0 && time == q.front().second){
            pq.push(q.front().first);
            q.pop();
        }
        if(pq.size() != 0){
            int count = pq.top();
            count--;
            if(count)
                q.push({count, time + n + 1});
            pq.pop();
        }
    }
    return time;
}

int main(){
    char x[12] = {'A', 'A', 'A'};
    std::vector<char> v(x, x + sizeof x / sizeof x[0]);
    cout<<leastInterval(v, 100)<<endl;
    return 0;
}