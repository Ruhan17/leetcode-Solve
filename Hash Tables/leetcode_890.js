function findAndReplacePattern(words, pattern){
    let map = new Map()
    let word = ""
    let ans = []
    let isAns = true
    let values = null
    for(let i = 0; i < words.length; i++){
       word = words[i]
       isAns = true
       for(let j = 0; j < word.length; j++){
           if(!map.has(pattern[j])){
                values = [...map.values()]
                if(values.includes(word[j])){
                    isAns = false
                    break
                }
                else{
                    map.set(pattern[j], word[j])
                }
           }
           else{
               if(map.get(pattern[j]) === word[j]) continue
               else{
                   isAns = false
                   break
               }
           }
       }
       if(isAns) ans.push(word) 
       map.clear()
    }
    return ans
}

console.log(findAndReplacePattern(["abc","cba","xyx","yxx","yyx"], "abc"))