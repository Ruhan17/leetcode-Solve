var searchBST = function(root, val) {
    let currentNode = root
    while(currentNode){
        if(currentNode.val === val) return currentNode
        else if(val > currentNode.val) currentNode = currentNode.right
        else currentNode = currentNode.left
    }
    return null 
 };