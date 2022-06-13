function maxNonOverlapping(nums, target){
    let currentIndex = -1
    let prefixSum = 0
    let map = new Map()
    let ans = 0
    map.set(0, -1)
    for(let i = 0; i < nums.length; i++){
        prefixSum += nums[i]
        if(map.has(prefixSum - target) && map.get(prefixSum - target) >= currentIndex){
            ans++
            currentIndex = i
        }
        map.set(prefixSum, i)
    }
    return ans
}

console.log(maxNonOverlapping([1,1,1,1,1], 2))