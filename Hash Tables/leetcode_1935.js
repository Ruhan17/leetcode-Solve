function canBeTypedWords(text, brokenLetters){
    let map = new Map()
    for(let i = 0; i < brokenLetters.length; i++){
        map.set(brokenLetters[i], true)
    }
    //console.table(map)
    let words = text.split(" ")
    //console.log(words)
    let word = ""
    let ans = 0
    for(let i = 0; i < words.length; i++){
        word = words[i]
        //console.log(word)
        for(let j = 0; j < word.length; j++){
            if(map.has(word[j])){
                //console.log(word[j])
                break
            }
            if(j === word.length - 1){
                ans++
            }
        }
    }
    return ans
}

console.log(canBeTypedWords("leet code", "e"))