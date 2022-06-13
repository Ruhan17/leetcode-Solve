function subarraysDivByK(nums, k){
    let map = new Map()
    let ans = 0
    let prefixSum = 0
    let temp = null
    map.set(0, 1)
    for(let i = 0; i < nums.length; i++){
        //if(nums[i] === 0) ans++
        prefixSum += nums[i]
        temp = prefixSum % k
        if(temp < 0) temp += k
        if(map.has(temp)){
            ans += map.get(temp)
            map.set(temp, map.get(temp) + 1)
        }
        else{
            map.set(temp, 1)
        }
    }
    return ans
}

console.log(subarraysDivByK([4,5,0,-2,-3,1], 5))