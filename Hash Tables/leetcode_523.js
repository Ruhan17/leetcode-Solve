function checkSubarraySum(nums, k){
    let prefixSum = 0
    let map = new Map()
    map.set(0, -1)
    for(let i = 0; i < nums.length; i++){
        prefixSum += nums[i]
        if(map.has(prefixSum % k) && i - map.get(prefixSum % k) > 1) return true
        if(!map.has(prefixSum % k)) map.set(prefixSum % k, i)
    }
    return false
}

console.log(checkSubarraySum( [23,2,6,4,7], 13))