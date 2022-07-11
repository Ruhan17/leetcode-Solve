class SeatManager {
public:
    priority_queue<int,vector<int>,greater<int>>q;
    SeatManager(int n) {
       for(int i = 1; i <= n; i++){
           q.push(i);
       } 
    }
    
    int reserve() {
        int min = q.top();
        q.pop();
        return min;
    }
    
    void unreserve(int seatNumber) {
        q.push(seatNumber);
    }
};