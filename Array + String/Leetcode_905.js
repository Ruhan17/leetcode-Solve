//Given an integer array nums,
//move all the even integers at the beginning of the array followed by all the odd integers.

function sortArrayByParity(nums){
    //take even & odd arrays
    let evenArray = []
    let oddArray = []
    //loop through the given array
    //if odd, then store in oddArray & vice versa
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0)
            evenArray.push(nums[i])
        else
            oddArray.push(nums[i])
    }
    //merge the two arrays
    evenArray = evenArray.concat(oddArray)
    //return the merged array
    return evenArray
}

console.log(sortArrayByParity([3]))