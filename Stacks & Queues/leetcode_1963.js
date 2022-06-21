function minSwaps(s){
    let extraClosingCount = 0
    let maxExtraClosingCount = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === '[') extraClosingCount -= 1
        else extraClosingCount += 1
        if(extraClosingCount > maxExtraClosingCount) maxExtraClosingCount = extraClosingCount
    }
    return Math.ceil(maxExtraClosingCount / 2)
}

console.log(minSwaps("[]"))