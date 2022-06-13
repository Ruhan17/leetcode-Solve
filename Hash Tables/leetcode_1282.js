function groupThePeople(groupSizes){
    let map = new Map()
    let groupMembers = null
    let groupSize = null
    let partOfAns = []
    let ans = []
    for(let i = 0; i < groupSizes.length; i++){
        groupSize = groupSizes[i]
        if(map.has(groupSize)){
            groupMembers = map.get(groupSize)
            groupMembers.push(i)
            map.set(groupSize, groupMembers)
        }
        else{
            groupMembers = []
            groupMembers.push(i)
            map.set(groupSize, groupMembers)
        }
    }
    //console.table(map)
    for(let [key, value] of map){
        for(let i = 0; i < value.length; i += key){
            partOfAns = value.slice(i, i + key)
            ans.push(partOfAns)
        }
    }
    return ans
}

console.table(groupThePeople([2,1,3,3,3,2]))