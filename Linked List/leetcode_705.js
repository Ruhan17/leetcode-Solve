
var MyHashSet = function() {
   this.hashSet = [] 
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(!this.hashSet.includes(key)) this.hashSet.push(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    if(this.hashSet.includes(key)){
        let idx = this.hashSet.indexOf(key)
        for(let i = idx; i < this.hashSet.length - 1; i++){
            this.hashSet[i] = this.hashSet[i + 1]
        }
        this.hashSet.pop()
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    if(this.hashSet.includes(key)) return true
    return false
};

var obj = new MyHashSet()
obj.add(1)
obj.add(2)
console.log(obj.contains(1))
console.log(obj.contains(3))
obj.add(2)
console.log(obj.contains(2))
obj.remove(2)
console.log(obj.contains(2))
