#include<bits/stdc++.h>
class MyQueue {
public:
    stack<int> stck; 
    MyQueue() {
    }
    
    void push(int x) {
        stck.push(x);
    }
    
    int pop() {
       stack<int> temp; 
       while(!stck.empty()){
         temp.push(stck.top());
         stck.pop();
       }
       int firstElement = temp.top();
       temp.pop();
       while(!temp.empty()){
         stck.push(temp.top());
         temp.pop();
       }
       return firstElement;
    }
    
    int peek() {
       stack<int> temp; 
       while(!stck.empty()){
         temp.push(stck.top());
         stck.pop();
       }
       int firstElement = temp.top();
       while(!temp.empty()){
         stck.push(temp.top());
         temp.pop();
       }
       return firstElement;
    }
    
    bool empty() {
        return stck.empty();
    }
};