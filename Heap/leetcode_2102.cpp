

class SORTracker {
public:
    typedef pair<int, string> pairs;
    set<pair<int, string>> s;
    set<pair<int, string>>::iterator it = end(s); 
    SORTracker() {
        
    }
    
    void add(string name, int score) {
        auto it1 = s.insert({-score, name}).first;
        if (it == end(s) || *it1 < *it)
            --it;
    }
    
    string get() {
       return (it++)->second;
    }
};
