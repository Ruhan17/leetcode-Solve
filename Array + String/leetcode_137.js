function singleNumber(nums){
    let ans = 0;
    for(let i = 0; i < nums.length; i++){
        ans ^= nums[i]
    }
    return ans
}

console.log(singleNumber([2,2,3]))