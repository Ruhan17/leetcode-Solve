function maxEqualFreq(nums){
    let count = []
    let freq = []
    for(let i = 0; i < 100002; i++){
        count.push(0)
        freq.push(0)
    }
    for(let i = 0; i < nums.length; i++){
        count[nums[i]]++
        freq[count[nums[i]]]++
    }
    for(let i = nums.length - 1; i >= 0; i--){
        //remove a number from left
        if(freq[count[nums[i]]] * count[nums[i]] === i) return i + 1
        //remove current number
        freq[count[nums[i]]]--
        count[nums[i]]--
        if(freq[count[nums[i - 1]]] * count[nums[i - 1]] === i) return i + 1
    }
    // If after removing one element there are no remaining elements, 
    // it's still considered that every appeared number has the same number of ocurrences (0)
    return 1
}

console.log(maxEqualFreq([1,1,1,2,2,2,3,3,3,4,4,4,5]))