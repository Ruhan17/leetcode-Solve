function getNumberOfSubarrays(nums, k){
    let left = right = 0
    let count = 0
    let numOfSubarrays = 0
    if(k === 0){
        for(let right = 0; right < nums.length; right++){
            if(nums[right] % 2 === 0){
                numOfSubarrays += (right - left + 1)
            }
            else{
                left = right + 1
            }
       }
       return numOfSubarrays
    }
    for(let right = 0; right < nums.length; right++){
        if(nums[right] % 2 === 1) count++
        if(count <= k){
            numOfSubarrays += (right - left + 1)
        }
        else{
            while(left < nums.length && left <=right && count > k){
                if(nums[left] % 2 === 1) count--
                left++
            }
            numOfSubarrays += (right - left + 1)
        }
    }
    return numOfSubarrays
}

function numberOfSubarrays(nums, k){
    return (getNumberOfSubarrays(nums, k) - getNumberOfSubarrays(nums, k - 1))
}

console.log(numberOfSubarrays([45627,50891,94884,11286,35337,46414,62029,20247,72789,89158,54203,79628,25920,16832,47469,80909], 1))