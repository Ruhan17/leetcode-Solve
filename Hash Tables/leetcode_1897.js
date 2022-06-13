function makeEqual(words){
    let map = new Map()
    let word = ""
    let value = null
    let wordsLength = words.length
    for(let i = 0; i < wordsLength; i++){
        word = words[i]
        for(let j = 0; j <  word.length; j++){
            if(map.has(word[j])){
                value = map.get(word[j])
                value++
                map.set(word[j], value)
            }
            else{
                map.set(word[j], 1)
            }
        }
    }
    //console.log(map)
    //console.log(wordsLength)
    for(let val of map.values()){
        //console.log(val)
        if(val % wordsLength !== 0){
            return false
        }
    }
    return true
}

console.log(makeEqual(["ab","a"]))