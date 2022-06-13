function uniqueMorseRepresentations(words){
    let allMorseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let map1 = new Map()
    let map2 = new Map()
    let word = ""
    let temp = ""
    let fullRepresentation = ""
    let ans = 0
    for(let i = 0; i < 26; i++){
        chr = String.fromCharCode(97 + i)
        map1.set(chr, allMorseCodes[i])
    }
    for(let i = 0; i < words.length; i++){
        word = words[i]
        fullRepresentation = null
        for(let j = 0; j < word.length; j++){
            temp = map1.get(word[j])
            fullRepresentation += temp
        }
        if(map2.has(fullRepresentation)) continue
        else{
            map2.set(fullRepresentation, true)
            ans++
        }
    }
    return ans
}

console.log(uniqueMorseRepresentations(["a"]))