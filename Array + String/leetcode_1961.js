function isPrefixString(s, words){
    let str = ""
    for(let i = 0; i < words.length; i++){
        str = str.concat(words[i])
        if(s === str) return true
        if(str.length > s.length) return false
    }
    return false
}

console.log(isPrefixString("iloveleetcode",  ["apples","i","love","leetcode"]))