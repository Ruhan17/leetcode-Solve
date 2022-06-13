function minSubarray(nums, p){
    let prefixSum = 0
    let map = new Map()
    let min = Infinity
    let temp = null
    let temp1 = null
    map.set(0, -1)
    let remainder = 0
    for(let i = 0; i < nums.length; i++){
        remainder = (remainder + nums[i]) % p
    }
    if(remainder === 0) return 0
    for(let i = 0; i < nums.length; i++){
        prefixSum += nums[i]
        temp = prefixSum % p
        temp1 = temp - remainder
        if(temp1 < 0) temp1 += p
        if(map.has(temp1)){
            if(i - map.get(temp1) < min){
                min = i - map.get(temp1)
            }
        }
        map.set(temp, i)
    }
    if(min === nums.length) return -1
    return min
}

console.log(minSubarray([1,2,3], 3))