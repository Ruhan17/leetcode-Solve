function minValue(root)
{
    let minv = root.val;
    while (root.left !== null)
    {
        minv = root.left.val;
        root = root.left;
    }
    return minv;
}
function deleteRec(root, key){
    /* Base Case: If the tree is empty */
    if (root === null)
        return root;
    /* Otherwise, recur down the tree */
    if (key < root.val)
        root.left = deleteRec(root.left, key);
    else if (key > root.val)
        root.right = deleteRec(root.right, key);
    // if key is same as root's
    // key, then This is the
    // node to be deleted
    else {
            // node with only one child or no child
            if (root.left === null)
                return root.right;
            else if (root.right === null)
                return root.left;
  
            // node with two children: Get the inorder
            // successor (smallest in the right subtree)
            root.val = minValue(root.right);
  
            // Delete the inorder successor
            root.right = deleteRec(root.right, root.val);
        }
    return root;
}
var deleteNode = function(root, key) {
     root = deleteRec(root, key);
     return root; 
};