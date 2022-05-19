function shiftingLetters(s, shifts){
    let prefixSum = []
    let sum = 0
    let asciiVal = null
    let ans = ""
    for(let i = shifts.length - 1; i >= 0; i--){
        sum += shifts[i]
        prefixSum.push(sum)
    }
    //console.log(prefixSum)
    for(let i = shifts.length - 1, j = 0; i >= 0; i--, j++){
        asciiVal = s[j].charCodeAt(0) - 97
        //console.log(asciiVal)
        asciiVal += (prefixSum[i])
        asciiVal = asciiVal % 26
        //console.log(asciiVal)
        asciiVal += 97
        //console.log(asciiVal)
        ans = ans.concat(String.fromCharCode(asciiVal))
        //console.log(ans)
        //s[j] = String.fromCharCode(asciiVal)
        //console.log(s[j])
    }
    return ans
}

console.log(shiftingLetters("ruu", [26, 9, 17]))