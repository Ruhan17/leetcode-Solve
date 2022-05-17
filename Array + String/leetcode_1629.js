function slowestKey(releaseTimes, keysPressed){
    //iterate through the array & compare with max
    let max = releaseTimes[0]
    let key = keysPressed[0]
    let duration = null
    for(let i = 1; i < releaseTimes.length; i++){
        duration = releaseTimes[i] - releaseTimes[i -1]
        if(duration > max){
            max = duration
            key = keysPressed[i]
        }
        else if(duration === max){
            if(keysPressed[i] > key){
                key = keysPressed[i]
            }
        }
    }
    return key
}

console.log(slowestKey([9,29,49,50], "cbcd"))