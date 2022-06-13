function uncommonFromSentences(s1, s2){
    let map1 = new Map()
    let splittedSentece = s1.split(" ")
    for(let i = 0; i < splittedSentece.length; i++){
        if(map1.has(splittedSentece[i]))
            map1.set(splittedSentece[i], -1)
        else
            map1.set(splittedSentece[i], 1)
    }
    let map2 = new Map()
    splittedSentece = s2.split(" ")
    for(let i = 0; i < splittedSentece.length; i++){
        if(map2.has(splittedSentece[i])){
            map2.set(splittedSentece[i], -1)
        }
        else{
            map2.set(splittedSentece[i], 1)
        }
    }
    let ans = []
    for (let [key, value] of map1.entries()) {
        if (value === -1) continue
        else{
            if(map2.has(key)) continue
            else ans.push(key)
        }
    }

    for (let [key, value] of map2.entries()) {
        if (value === -1) continue
        else{
            if(map1.has(key)) continue
            else ans.push(key)
        }
    }

    return ans
}

console.log(uncommonFromSentences("apple apple", "banana"))