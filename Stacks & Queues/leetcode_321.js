function getHighestNumberOfLengthK(nums, k){
    let digitsToReplace = nums.length - k
    let stack = []
    for(let i = 0; i < nums.length; i++){
        while(stack.length !== 0 && digitsToReplace > 0 && stack[stack.length - 1] < nums[i]){
            digitsToReplace--
            stack.pop()
        }
        stack.push(nums[i])
    }
    let ans = []
    for(let i = 0; i < k; i++){
        ans.push(stack[i])
    }
    return ans
}

function checkIfWeCanTakeFromFirstArray(nums1, i, nums2, j){
    if(j === nums2.length) return true
    else if(i === nums1.length) return false
    for(;nums1[i] === nums2[j] && i < nums1.length && j < nums2.length; i++, j++){

    }
    if(i < nums1.length && j < nums2.length && nums1[i] > nums2[j]) return true
    if(i < nums1.length && j < nums2.length && nums1[i] < nums2[j]) return false
    if(j === nums2.length) return true
    else if(i === nums1.length) return false
}

function compare(greatest, max){
    for(let i = 0; i < greatest.length; i++){
        if(max[i] > greatest[i]) return true
        else if(max[i] < greatest[i]) return false
    }
}

function merge(nums1, nums2, k){
    let greatest = []
    for(let i = 0; i < k; i++){
        greatest.push(0)
    }
    for(let l = 0; l <= k; l++){
        let max = []
        let i = l
        let j = k - i
        let first = false
        let second = false
        if(i <= nums1.length){
            var arr1 = getHighestNumberOfLengthK(nums1, i)
            first = true
        }
        if(j <= nums2.length){
            var arr2 = getHighestNumberOfLengthK(nums2, j)
            second = true
        }
        if(first && second){
            let firstIdx = 0
            let secondIdx = 0
            for(let m = 0; m < arr1.length + arr2.length; m++){
                if(checkIfWeCanTakeFromFirstArray(arr1, firstIdx, arr2, secondIdx)){
                    max.push(arr1[firstIdx])
                    firstIdx++
                }
                else{
                    max.push(arr2[secondIdx])
                    secondIdx++
                }
            }
        }
        if(compare(greatest, max)) greatest = max
    }
    return greatest
}

function maxNumber(nums1, nums2, k){
    return merge(nums1, nums2, k)
}

console.log(maxNumber([3,9],[8,9],3))