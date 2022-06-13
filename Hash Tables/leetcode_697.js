function findShortestSubArray(nums){
    let map = new Map()
    let max = [1, 0, 0]
    let value = []
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            value = map.get(nums[i])
            value[0]++
            value[2] = i
            map.set(nums[i], value)
            if(value[0] > max[0]){
                max = value
            }
            else if(value[0] === max[0]){
                if(value[2] - value[1] < max[2] - max[1]) max = value
            }
        }
        else{
            value = []
            value.push(1)
            value.push(i)
            value.push(i)
            map.set(nums[i], value)
        }
    }
    return max[2] - max[1] + 1
}

console.log(findShortestSubArray([1,2,2,3,1,4,2,1]))