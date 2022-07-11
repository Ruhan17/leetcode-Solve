class StockPrice {
public:
    //map stores timestamp & most recent price
    map<int, int> timeAndPrice;
    //use multiset to store all the prices of the stock
    multiset<int> allPrice;
    
    StockPrice() {
        
    }
    
    void update(int timestamp, int price) {
        if (timeAndPrice.find(timestamp) != timeAndPrice.end())
            allPrice.erase(allPrice.find(timeAndPrice[timestamp]));
        timeAndPrice[timestamp] = price;
        allPrice.insert(price);
    }
    
    int current() {
        return timeAndPrice.rbegin()->second;
    }
    
    int maximum() {
        return *allPrice.rbegin();
    }
    
    int minimum() {
        return *allPrice.begin();
    }
};
