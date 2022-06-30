var sortedListToBST = function(head) {
    if(head === null) return null
    let currentNode = head
    let sorted = []
    while(currentNode){
        sorted.push(currentNode.val)
        currentNode = currentNode.next
    }
    //console.log(sorted)
    function helper(l, r){
        if(l > r) return null
        const middle = Math.floor((l + r) / 2)
        const root = new TreeNode(sorted[middle])
        root.left = helper(l, middle - 1)
        root.right = helper(middle + 1, r)
        return root
    }
    return helper(0, sorted.length - 1)
};