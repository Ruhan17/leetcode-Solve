function numOfSubarrays(arr, k, threshold){
    let sum = 0
    let left = right = 0
    let avg = null
    let ans = 0
    while(right < arr.length){
        sum += arr[right]
        if(right - left + 1 === k){
            avg = sum / k
            if(avg >= threshold) ans++
            sum -= arr[left]
            left++
        }
        right++
    }
    return ans
}

console.log(numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5))