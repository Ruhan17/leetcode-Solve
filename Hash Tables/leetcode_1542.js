function longestAwesome(s){
    let prefixSum = 0
    let map = new Map()
    let max = 0
    let oneOdd = null
    map.set(0, -1)
    for(let i = 0; i < s.length; i++){
        prefixSum ^= (1 << (s[i].charCodeAt(0) - 48))
        if(map.has(prefixSum)){
            max = Math.max(max, i - map.get(prefixSum))
        }
        else{
            map.set(prefixSum, i)
        }
        for(let j = 0; j < 10; j++){
            oneOdd = prefixSum ^ (1 << j)
            if(map.has(oneOdd)){
                max = Math.max(max, i - map.get(oneOdd))
            }
        }
    }
    return max
}

console.log(longestAwesome("213123"))