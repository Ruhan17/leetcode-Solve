function numSubmatrixSumTarget (matrix, target){
    let sum = null
    let map = new Map()
    let ans = 0
    for(let i = 0; i < matrix.length; i++){
        sum = 0
        for(let j = 0; j < matrix[0].length; j++){
            sum += matrix[i][j]
            matrix[i][j] = sum
        }
    }

    for(let c1 = 0; c1 < matrix[0].length; c1++){
        for(let c2 = c1; c2 < matrix[0].length; c2++){
            sum = 0
            map.clear()
            map.set(0, 1)
            for(let row = 0; row < matrix.length; row++){
                sum += matrix[row][c2]
                if(c1 > 0) sum -= matrix[row][c1 - 1]
                if(map.has(sum - target)){
                    ans += map.get(sum - target)
                }
                if(map.has(sum)){
                    map.set(sum, map.get(sum) + 1)
                }
                else{
                    map.set(sum, 1)
                }
            }
        }
    }
    return ans
}

console.log(numSubmatrixSumTarget([[904]], 0))