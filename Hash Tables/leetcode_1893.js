function isCovered(ranges, left, right){
    let map = new Map()
    for(let i = left; i <= right; i++){
        map.set(i, false)
    }
    for(let i = 0; i < ranges.length; i++){
        left = ranges[i][0]
        right = ranges[i][1]
        for(let i = left; i <= right; i++){
            map.set(i, true)
        }
    }
    //console.log(map)
    for(let val of map.values()){
        //console.log(val)
        if(!val) return false
    }
    return true
}

console.log(isCovered([[1,50]], 1, 50))