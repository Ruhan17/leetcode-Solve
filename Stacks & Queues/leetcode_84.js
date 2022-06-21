function largestRectangleArea(heights){
    let maxArea = 0
    let stack = []
    for(let i = 0; i < heights.length; i++){
        let idx = i
        while(stack.length !== 0 && stack[stack.length - 1][1] > heights[i]){
            idx = stack[stack.length - 1][0]
            let width = i - stack[stack.length - 1][0]
            let height = stack[stack.length - 1][1]
            let area = width * height
            if(area > maxArea) maxArea = area 
            stack.pop()
        }
        let temp = []
        temp.push(idx)
        temp.push(heights[i])
        stack.push(temp)
    }
    for(let i = 0; i < stack.length; i++){
        let width = heights.length - stack[i][0]
        let height = stack[i][1]
        let area = width * height
        if(area > maxArea) maxArea = area
    }
    return maxArea
}

console.log(largestRectangleArea([2,1,5,6,2,3]))