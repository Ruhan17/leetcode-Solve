function printVertically(s){
    let maxLength = 0
    let splittedWords = s.split(" ")
    let ans = []
    let str = ""
    //console.log(splittedWords)
    for(let i = 0; i < splittedWords.length; i++){
        if(splittedWords[i].length > maxLength) maxLength = splittedWords[i].length
    }
    for(let i = 0; i < maxLength; i++){
        str = ""
        for(let j = 0; j < splittedWords.length; j++){
            if(i + 1 <= splittedWords[j].length){
                str = str.concat(splittedWords[j][i])
            }
            else{
                str = str.concat(" ")
            }
        }
        str = str.trimEnd()
        ans.push(str)
    }
    //console.log(maxLength)
    return ans
}

console.log(printVertically("TO BE OR NOT TO BE"))