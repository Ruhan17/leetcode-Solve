var bstFromPreorder = function(preorder) {
    let root = new TreeNode(preorder[0])
    for(let i = 1; i < preorder.length; i++){
        let currentNode = root
        let temp = new TreeNode(preorder[i])
        while(true){
            if(preorder[i] > currentNode.val){
                if(!currentNode.right){
                    currentNode.right = temp
                    break
                }
                currentNode = currentNode.right   
            }
            else{
                if(!currentNode.left){
                    currentNode.left = temp
                    break
                }
                currentNode = currentNode.left
            }
        }
    }
    return root
};