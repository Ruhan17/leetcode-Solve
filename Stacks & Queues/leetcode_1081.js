function smallestSubsequence(s){
    let freq = []
    let isAdded = []
    let ans = []
    let ascii = null
    let idx = null
    for(let i = 0; i < 26; i++){
        freq.push(0)
        isAdded.push(false)
    }
    for(let i = 0; i < s.length; i++){
        ascii = s[i].charCodeAt(0)
        idx = ascii - 97
        freq[idx] += 1
    }
    // console.log(s)
    // console.log(freq)
    for(let i = 0; i < s.length; i++){
        ascii = s[i].charCodeAt(0)
        idx = ascii - 97
        freq[idx]--
        if(isAdded[idx]) continue
        while(ans.length !== 0 && freq[ans[ans.length - 1].charCodeAt(0) - 97] > 0 && ans[ans.length - 1] > s[i]){
            isAdded[ans[ans.length - 1].charCodeAt(0) - 97] = false
            ans.pop()
        }
        ans.push(s[i])
        isAdded[idx] = true
        // console.log(ans)
    }
    let str = ""
    for(let i = 0; i < ans.length; i++){
        str += ans[i]
    }
    return str
}

console.log(smallestSubsequence("bcabc"))