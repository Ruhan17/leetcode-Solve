
var MyHashMap = function() {
    this.hashMap = []
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    for(let i = 0; i < this.hashMap.length; i++){
        if(this.hashMap[i][0] === key){
            this.hashMap[i][1] = value
            return
        }
    }
    let temp = []
    temp.push(key)
    temp.push(value)
    this.hashMap.push(temp)
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    for(let i = 0; i < this.hashMap.length; i++){
        if(this.hashMap[i][0] === key){
            return this.hashMap[i][1]
        }
    }
    return -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let idx = -1
    for(let i = 0; i < this.hashMap.length; i++){
        if(this.hashMap[i][0] === key){
            idx = i
            break
        }
    }
    if(idx !== -1){
        for(let i = idx; i < this.hashMap.length - 1; i++){
            this.hashMap[i] = this.hashMap[i + 1]
        }
        this.hashMap.pop()
    }
};


 
 var obj = new MyHashMap()
 obj.put(1, 1)
 obj.put(2, 2)
 console.log(obj.get(1))
 console.log(obj.get(3))
 obj.put(2, 1)
 console.log(obj.get(2))
 obj.remove(2)
 console.log(obj.get(2))
