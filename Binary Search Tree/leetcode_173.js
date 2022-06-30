function getInorder(root, arr){
 
    if(root){
        // First recur on left child
        arr = getInorder(root.left, arr)
 
        // then print the data of node
        arr.push(root.val)
 
        // now recur on right child
        arr = getInorder(root.right, arr)   
    }
    return arr
}

var BSTIterator = function(root) {
    this.root = root
    let arr = []
    this.inorder = getInorder(this.root, arr)
    this.idx = -1
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.idx++
    return this.inorder[this.idx]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if(this.idx < this.inorder.length - 1) return true
    return false
};