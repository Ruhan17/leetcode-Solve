function nextGreaterElements(nums){
    let stack = []
    let ans = []
    for(let i = 0; i < nums.length; i++){
        ans.push(-1)
    }
    for(let i = 0; i < 2 * nums.length; i++){
        while(stack.length !== 0 && nums[stack[stack.length - 1]] < nums[i % nums.length]){
            ans[stack[stack.length - 1]] = nums[i % nums.length]
            stack.pop()
        }
        if(i < nums.length) stack.push(i)
    }
    return ans
}

console.log(nextGreaterElements([1, 2, 3, 4, 3]))