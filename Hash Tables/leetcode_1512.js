function numIdenticalPairs(nums){
    let ans = 0;
    let temp = null
    let map1 = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map1.has(nums[i])){
            temp = map1.get(nums[i])
            ans += temp
            temp++
            map1.set(nums[i], temp)
        }
        else{
            map1.set(nums[i], 1)
        }
    }
    return ans
}

console.log(numIdenticalPairs([1,2,3]))