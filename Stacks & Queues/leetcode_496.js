/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let map = new Map()
    let stack = []
    let ans = []
    for(let i = 0; i < nums2.length; i++){
        while(stack.length !== 0 && stack[stack.length - 1] <= nums2[i]){
            map.set(stack[stack.length - 1], nums2[i])
            stack.pop()
        }
        stack.push(nums2[i])
    }
    for(let i = 0; i < stack.length; i++){
        map.set(stack[i], -1)
    }
    for(let i = 0; i < nums1.length; i++){
        ans.push(map.get(nums1[i]))
    }
    return ans
};