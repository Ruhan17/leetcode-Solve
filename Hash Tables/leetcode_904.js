function totalFruit(fruits){
    let map = new Map()
    let max = 0
    let left = right = 0
    while(right < fruits.length){
        if(!map.has(fruits[right])){
            map.set(fruits[right], 1)
        }
        else{
            map.set(fruits[right], map.get(fruits[right]) + 1)
        }
        if(map.size > 2){
            max = Math.max(max, right - left)
            while(map.size > 2 && left <= right){
                if(map.get(fruits[left]) === 1) map.delete(fruits[left])
                else{
                    map.set(fruits[left], map.get(fruits[left]) - 1)
                }
                left += 1
            }
        }
        right++
    }
    max = Math.max(max, right - left)
    return max
}

console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]))