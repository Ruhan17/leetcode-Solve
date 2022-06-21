class MyCircularQueue {
public:
    int front = 0;
    int rear = -1;
    int length = 0;
    int *q;
    int size;
    MyCircularQueue(int k) {
        size = k;
        q = new int [size];
    }
    
    bool enQueue(int value) {
        if(!isFull()){
           rear = (rear + 1) % size;
           q[rear] = value;
           length++; 
           return true;
        }
        else return false;
    }
    
    bool deQueue() {
        if(!isEmpty()){
            front = (front + 1) % size;
            length--;
            return true;
        }
        else return false;
    }
    
    int Front() {
        if(!isEmpty()){
            return q[front];
        }
        else return -1;
    }
    
    int Rear() {
        if(!isEmpty()){
            return q[rear];
        }
        else return -1;
    }
    
    bool isEmpty() {
        return length == 0;
    }
    
    bool isFull() {
        return length == size;
    }
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue* obj = new MyCircularQueue(k);
 * bool param_1 = obj->enQueue(value);
 * bool param_2 = obj->deQueue();
 * int param_3 = obj->Front();
 * int param_4 = obj->Rear();
 * bool param_5 = obj->isEmpty();
 * bool param_6 = obj->isFull();
 */