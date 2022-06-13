function findMaxLength(nums){
    let max = 0
    let prefixSum = 0
    let map = new Map()
    map.set(0, -1)
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0) prefixSum--
        else prefixSum++
        if(map.has(prefixSum)){
            if(i - map.get(prefixSum) > max) max = i - map.get(prefixSum)
        }
        else map.set(prefixSum, i)
    }
    return max
}

console.log(findMaxLength([0,1,0]))