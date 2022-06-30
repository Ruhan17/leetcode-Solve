var sortedArrayToBST = function(nums) {
    function helper(l, r){
        if(l > r) return null
        const middle = Math.floor((l + r) / 2)
        const root = new TreeNode(nums[middle])
        root.left = helper(l, middle - 1)
        root.right = helper(middle + 1, r)
        return root
    }
    return helper(0, nums.length - 1)
};