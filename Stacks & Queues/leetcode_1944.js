function canSeePersonsCount(heights){
    let ans = []
    let stack = []
    for(let i = 0; i < heights.length; i++){
        ans.push(0)
    }
    for(let i = 0; i < heights.length; i++){
        while(stack.length !== 0 && heights[stack[stack.length - 1]] < heights[i]){
            ans[stack[stack.length - 1]]++
            stack.pop()
        }
        if(stack.length !== 0) ans[stack[stack.length - 1]]++
        stack.push(i)
    }
    return ans
}

console.log(canSeePersonsCount( [5,1,2,3,10]))