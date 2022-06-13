function numSubarrayProductLessThanK(nums, k){
    let ans = 0
    left = right = 0
    let product = 1
    if(k <= 1) return ans
    while(right < nums.length){
        product *= nums[right]
        while(product >= k){
            product /= nums[left]
            left++
        }
        ans += right - left + 1
        right++
    }
    return ans
}

console.log(numSubarrayProductLessThanK([1,2,3], 0))