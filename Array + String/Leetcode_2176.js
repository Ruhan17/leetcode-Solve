//Given a 0-indexed integer array nums of length n and an integer k
//return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and 
//(i * j) is divisible by k.

//function to find gcd of two numbers
function gcd(a, b) {
    if (a == 0)
        return b;
    return gcd(b % a, a);
}

function countPairs(nums, k){
    //first make a map to store all indexes of a particular number
    let numAndIdx = new Map()
    let temp = []
    for(let i = 0; i < nums.length; i++){
        if(!numAndIdx.has(nums[i])){
            numAndIdx.set(nums[i], [i])
        }
        else{
           temp = numAndIdx.get(nums[i])
           temp.push(i) 
           numAndIdx.set(nums[i], temp)
        }
    }
    let result = 0
    //iterate through the indexes
    for (const [key, value] of numAndIdx.entries()) {
        let gcdValues = new Map()
        for(let i = 0; i < value.length; i++){
            //calculate gcd(i, k)
            let gcd1 = gcd(value[i], k)
            //compare with other values of gcd(j, k)
            for (const [gcd2, numOfAppearance] of gcdValues.entries()){
                //check if gcd(i,k) * gcd(j,k) % k === 0
                //if satisfies, then increament result by 1
                if((gcd2 * gcd1) % k === 0){
                    result += numOfAppearance;
                }
            } 
            //store the value of gcd(i, k)
            if(!gcdValues.has(gcd1)){
                gcdValues.set(gcd1, 1)
            }
            else{
                let count = gcdValues.get(gcd1)
                count++
                gcdValues.set(gcd1, count)
            }
        }
      }
      //return the result
      return result
}

console.log(countPairs([3,1,2,2,2,1,3], 2))