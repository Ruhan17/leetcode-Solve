function findingUsersActiveMinutes(logs, k){
    let map = new Map()
    let log = null
    let ans = new Array(k).fill(0)
    let temp = null
    let logLength = null
    //ans[0] = 4
    //console.table(ans)
    for(let i = 0; i < logs.length; i++){
        if(map.has(logs[i][0])){
            log = map.get(logs[i][0])
            if(log.includes(logs[i][1])) continue
            else{
                log.push(logs[i][1])
                map.set(logs[i][0], log)
            }
        }
        else{
            log = []
            log.push(logs[i][1])
            map.set(logs[i][0], log)
        }
    }

    for (let value of map.values()){
        logLength = value.length
        logLength--
        ans[logLength] += 1
    }

    return ans
}

console.log(findingUsersActiveMinutes([[0,5],[1,2],[0,2],[0,5],[1,3]], 5))