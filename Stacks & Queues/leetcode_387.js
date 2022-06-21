function firstUniqChar(s){
    let map = new Map()
    let min = Infinity
    for(let i = 0; i < s.length; i++){
        if(!map.has(s[i])){
            map.set(s[i], [i, 1])
        }
        else{
            let arr = map.get(s[i])
            arr[1]++
            map.set(s[i], [i, arr[1]])
        }
    }
    for (const [key, value] of map) {
        if(value[1] === 1){
            if(value[0] < min) min = value[0]
        }
    }
    if(min === Infinity) return -1
    return min
}

console.log(firstUniqChar("aabb"))