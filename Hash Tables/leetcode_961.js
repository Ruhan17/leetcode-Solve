function repeatedNTimes(nums){
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])) return nums[i]
        map.set(nums[i], true)
    }
}

console.log(repeatedNTimes([5,1,5,2,5,3,5,4]))