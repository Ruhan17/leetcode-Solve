function isIdealPermutation (nums){
    let max = 0
    for(let i = 0; i < nums.length - 2; i++){
        if(nums[i] > max) max = nums[i]
        if(max > nums[i + 2]) return false
    }
    return true
}

console.log(isIdealPermutation([1,2,0]))