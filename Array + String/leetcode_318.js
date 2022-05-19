function maxProduct(words) {
    let wordToNums = []
    let splitted = []
    let temp = 0
    for(let i = 0; i < words.length; i++){
        temp = 0
        splitted = words[i].split('')
        for(let j = 0; j < splitted.length; j++){
            temp = temp | (1 << (splitted[j].charCodeAt(0) - 'a'.charCodeAt(0)))
        }
        wordToNums.push(temp)
    }
    let maxLength = 0
    for(let i = 0; i < words.length; i++){
        for(let j = i + 1; j < words.length; j++){
            if((wordToNums[i] & wordToNums[j]) === 0){
                if(words[i].length * words[j].length > maxLength){
                    maxLength = words[i].length * words[j].length
                }
            }
        }
    }
    return maxLength
}

console.log(maxProduct(["a","aa","aaa","aaaa"]))