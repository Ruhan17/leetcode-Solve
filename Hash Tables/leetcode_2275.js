function largestCombination(candidates){
    let max = 0
    let count = 0
    for(let i = 0; i < 31; i++){
        count = 0
        for(let j = 0; j < candidates.length; j++){
            if(candidates[j] & (1 << i)) count++
        }
        if(count > max) max = count
    }
    return max
}

console.log(largestCombination([8, 8]))