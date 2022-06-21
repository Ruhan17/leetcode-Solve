function mostCompetitive(nums, k){
    let digitsToReplace = nums.length - k
    let stack = []
    for(let i = 0; i < nums.length; i++){
        while(stack.length !== 0 && digitsToReplace > 0 && stack[stack.length - 1] > nums[i]){
            digitsToReplace--
            stack.pop()
        }
        stack.push(nums[i])
    }
    let ans = []
    for(let i = 0; i < k; i++){
        ans.push(stack[i])
    }
    return ans
}

console.log(mostCompetitive([2,4,3,3,5,4,9,6], 4))