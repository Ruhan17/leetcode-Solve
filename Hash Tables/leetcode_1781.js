function getMax(map){
    max = 0
    for(let value of map.values()){
        if(value > max) max = value
    }
    return max
}

function getMin(map){
    min = Infinity
    for(let value of map.values()){
        if(value < min) min = value
    }
    return min
}

function beautySum(s){
    let ans = 0
    let map = new Map()
    let count = null
    for(let i = 0; i < s.length; i++){
        map.clear()
        for(let j = i ; j < s.length; j++){
            if(map.has(s[j])){
                count = map.get(s[j])
                count++
                map.set(s[j], count)
            }
            else{
                map.set(s[j], 1)
            }
            ans += getMax(map) - getMin(map)
        }
    }
    return ans
}

console.log(beautySum("aabcbaa"))