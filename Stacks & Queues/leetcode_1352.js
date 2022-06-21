
var ProductOfNumbers = function() {
    this.ans = []
    this.product = 1
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if(num){
        this.product *= num
        this.ans.push(this.product)
    }
    else{
        this.ans = []
        this.product = 1
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if(this.ans.length < k) return 0
    if(this.ans.length === k) return this.product
    return this.ans[this.ans.length - 1] / this.ans[this.ans.length - 1 - k]
};