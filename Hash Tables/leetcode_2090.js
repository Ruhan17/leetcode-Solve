function getAverages(nums, k){
    let length = nums.length
    let ans = new Array(length).fill(-1)
    if(length < 2 * k + 1) return ans
    let sum = 0
    let left = right = 0
    let firstIndex = k
    while(right < length){
        sum += nums[right]
        if(right - left === 2 * k){
            ans[firstIndex] = Math.floor(sum / (2 * k + 1))
            sum -= nums[left]
            left++
            firstIndex++
        }
        right++
    }
    return ans
}

console.log(getAverages([8], 10000))