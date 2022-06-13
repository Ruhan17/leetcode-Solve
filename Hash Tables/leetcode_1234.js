function isOk(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0) return false
    }
    return true
}

function balancedString(s){
    let left = right = 0
    let arr = []
    let idealCount = s.length / 4
    let min = Infinity
    // Create Empty Array of Length 4
    for(let i = 0; i < 4; i++){
        arr.push(0)
    }
    // index 0 : Q
    // index 1 : W
    // index 2 : E
    // index 3 : R
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'Q') arr[0] += 1
        else if(s[i] === 'W') arr[1] += 1
        else if(s[i] === 'E') arr[2] += 1
        else arr[3] += 1
    }
    // Count Which Are the Extra Elements & What is Their Extra Frequency
    //Minus means these numbers need to be added
    for(let i = 0; i < 4; i++){
        arr[i] -= idealCount
    }
    //A substring is ok if no extra elements
    if(isOk(arr)) return 0
    //sliding window
    while(right < s.length){
        //Expand the window
        //these substrings are potential to be elemeneted
        if(s[right] === 'Q') arr[0] -= 1
        else if(s[right] === 'W') arr[1] -= 1
        else if(s[right] === 'E') arr[2] -= 1
        else arr[3] -= 1
        //once we get a potential window, we try to shrink it as much as possible
        while(isOk(arr)){
            min = Math.min(min, right - left + 1)
            if(s[left] === 'Q') arr[0] += 1
            else if(s[left] === 'W') arr[1] += 1
            else if(s[left] === 'E') arr[2] += 1
            else arr[3] += 1
            left++
        }
        right++
    }
    return min
}

console.log(balancedString("WQWRQQQW"))