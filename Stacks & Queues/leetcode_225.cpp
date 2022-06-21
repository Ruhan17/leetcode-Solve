class MyStack {
public:
    queue<int> q;
    MyStack() { 
    }
    
    void push(int x) {
        q.push(x);
    }
    
    int pop() {
       int x = q.back(); 
       queue<int> dummy;
       while(!(q.size() == 1)){
           dummy.push(q.front());
           q.pop();
       }
       q.pop();
       while(!dummy.empty()){
           q.push(dummy.front());
           dummy.pop();
       }
       return x; 
    }
    
    int top() {
        return q.back(); 
    }
    
    bool empty() {
        return q.empty();
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */