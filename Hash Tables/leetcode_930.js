function numSubarraysWithSum (nums, goal){
    let prefixSum = 0
    let ans = 0
    let map = new Map()
    map.set(0, 1)
    for(let i = 0; i < nums.length; i++){
        prefixSum += nums[i]
        if(map.has(prefixSum - goal)){
            ans += map.get(prefixSum - goal)
        }
        if(map.has(prefixSum)){
            map.set(prefixSum, map.get(prefixSum) + 1)
        }
        else{
            map.set(prefixSum, 1)
        }
    }
    return ans
}

console.log(numSubarraysWithSum([0,0,0,0,0], 0))