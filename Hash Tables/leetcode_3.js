function lengthOfLongestSubstring (s){
    let map = new Map()
    let left = right = 0
    let max = 0
    while(right < s.length){
        if(map.has(s[right])){
            left = Math.max(left, map.get(s[right]) + 1)
        }
        max = Math.max(max, right - left + 1)
        map.set(s[right], right)
        right++
    }
    return max
}

console.log(lengthOfLongestSubstring("abva"))