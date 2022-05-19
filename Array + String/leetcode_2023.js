function numOfPairs(nums, target){
    let concatenatedString = ""
    let ans = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            concatenatedString = nums[i].concat(nums[j])
            if(concatenatedString === target) ans++
            concatenatedString = nums[j].concat(nums[i])
            if(concatenatedString === target) ans++
        }
    }
    return ans
}

console.log(numOfPairs(["1","1","1"], "11"))