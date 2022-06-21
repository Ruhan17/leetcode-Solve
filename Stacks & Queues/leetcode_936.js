function canUpdate(startIdx, stamp, target){
    for(let i = startIdx, j = 0; i < startIdx + stamp.length; i++, j++){
        if(target[i] !== '*' && target[i] !== stamp[j]) return false
    }
    return true
}

function doUpdate(startIdx, stamp, target){
    for(let i = startIdx; i < startIdx + stamp.length; i++) target = target.substring(0, i) + '*' + target.substring(i + 1);
    return target
}

function movesToStamp(stamp, target){
    let temp = ""
    let ans = []
    let isVisited = []
    for(let i = 0; i < target.length; i++){
        isVisited.push(false)
        temp += "*"
    }
    while(target !== temp){
        let doneReplace = false
        for(let i = 0; i + stamp.length <= target.length; i++){
            if(!isVisited[i] && canUpdate(i, stamp, target)){
                target = doUpdate(i, stamp, target)
                doneReplace = true
                isVisited[i] = true
                ans.push(i)
                break
            }
        }
        if(!doneReplace) return []
    }
    return ans.reverse()
}

console.log(movesToStamp("abca", "aabcaca"))