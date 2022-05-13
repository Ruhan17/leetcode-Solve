//Given an array of length n
//output an array of length 2n, so I need to copy the given array 2 times

function concatArray(nums){
    const ans = []
    //loop through the input array for the first time
    for(let i = 0; i < nums.length; i++){
        ans.push(nums[i])
    }
    //loop through the input array for the second time
    for(let i = 0; i < nums.length; i++){
        ans.push(nums[i])
    }
    //return answer
    return ans
}

console.log(concatArray([1, 3, 2, 1]))