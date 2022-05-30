function singleNumber(nums){
    let ans = 0;
    let temp = null
    let oneCount = 0
    for(let i = 0; i < 32; i++){
        oneCount = 0
        temp = Math.pow(2, i)
        for(let j = 0; j < nums.length; j++){
            if(nums[j] & temp) oneCount++
        }
        if(oneCount % 3 !== 0) ans |= (1 << i)
    }
    return ans
}

console.log(singleNumber([0,1,0,1,0,1,99]))