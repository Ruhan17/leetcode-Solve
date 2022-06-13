function countTriplets(nums){
    let ans = 0
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            andResult = nums[i] & nums[j]
            if(map.has(andResult)){
                map.set(andResult, map.get(andResult) + 1)
            }
            else map.set(andResult, 1)
        }
    }

    for(let i = 0; i < nums.length; i++){
        for(let [key, value] of map){
            if((nums[i] & key) === 0){
                ans += value
            }
        }
    }

    return ans
}

console.log(countTriplets([2, 1, 3]))