function isOk(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0) return false
    }
    return true
}

function minWindow(s, t){
    let left = right = 0
    let rightSlice = leftSlice = null
    let arr = []
    let min = Infinity
    for(let i = 0; i < 130; i++){
        arr.push(0)
    }
    for(let i = 0; i < t.length; i++){
        arr[t[i].charCodeAt(0)] += 1
    }
    while(right < s.length){
        //Expand the window
        //these substrings are potential to be elemeneted
        arr[s[right].charCodeAt(0)] -= 1
        //once we get a potential window, we try to shrink it as much as possible
        while(isOk(arr)){
            if(right - left + 1 < min){
                min = right - left + 1
                leftSlice = left
                rightSlice = right + 1
            }
            arr[s[left].charCodeAt(0)] += 1
            left++
        }
        right++
    }
    if(min === Infinity) return ""
    return s.slice(leftSlice, rightSlice)
}

console.log(minWindow("ADOBECODEBANC", "ABC"))