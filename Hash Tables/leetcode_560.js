function subarraySum (nums, k){
    let prefixSum = 0
    let map = new Map()
    let ans = 0
    let count = 0
    map.set(0, 1)
    for(let i = 0; i < nums.length; i++){
        prefixSum += nums[i]
        if(map.has(prefixSum - k)){
            ans += map.get(prefixSum - k)
        }
        if(map.has(prefixSum)){
            count = map.get(prefixSum)
            count++
            map.set(prefixSum, count)
        }
        else map.set(prefixSum, 1)
    }
    return ans
}

console.log(subarraySum([1,2,3], 3))