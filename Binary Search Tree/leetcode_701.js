var insertIntoBST = function(root, val) {
    if(root === null) return new TreeNode(val)
    let currentNode = root
    let temp = new TreeNode(val)
    while(true){
        if(val > currentNode.val){
            if(!currentNode.right){
                currentNode.right = temp
                return root
            }
            currentNode = currentNode.right
        }
        else{
            if(!currentNode.left){
                currentNode.left = temp
                return root
            }
            currentNode = currentNode.left
        }
    }
};