function getDistances(arr){
    let map = new Map()
    let length = arr.length
    let freq = new Array(100001).fill(0)
    let ans = new Array(length).fill(0)
    let prefixSum = 0
    for(let i = 0; i < length; i++){
        if(map.has(arr[i])){
            prefixSum = map.get(arr[i])
        }
        else prefixSum = 0
        ans[i] += freq[arr[i]] * i - prefixSum
        if(map.has(arr[i])){
            prefixSum = map.get(arr[i])
            prefixSum += i
            map.set(arr[i], prefixSum)
        }
        else map.set(arr[i], i)
        freq[arr[i]]++
    }
    map.clear()
    freq = new Array(100001).fill(0)
    for(let i = length - 1; i >= 0; i--){
        if(map.has(arr[i])){
            prefixSum = map.get(arr[i])
        }
        else prefixSum = 0
        ans[i] += prefixSum - freq[arr[i]] * i
        if(map.has(arr[i])){
            prefixSum = map.get(arr[i])
            prefixSum += i
            map.set(arr[i], prefixSum)
        }
        else map.set(arr[i], i)
        freq[arr[i]]++
    }
    return ans
}

console.log(getDistances([10,5,10,10]))