function minOperations(boxes){
    let operations = 0;
    let boxWithBalls = 0
    let ans = []
    //count from left to right
    for(let i = 0; i < boxes.length; i++){
        ans.push(operations)
        if(boxes[i] === '1'){
            boxWithBalls++
        }
        operations += boxWithBalls
    }
    //count from right to left
    operations = 0
    boxWithBalls = 0
    for(let i = boxes.length - 1; i >= 0; i--){
        ans[i] += operations
        if(boxes[i] === '1'){
            boxWithBalls++
        }
        operations += boxWithBalls
    }
    return ans
}

console.log(minOperations("001011"))