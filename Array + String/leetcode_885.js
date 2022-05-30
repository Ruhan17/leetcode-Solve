function spiralMatrixIII(rows, cols, rStart, cStart){
    let m = rows
    let n = cols
    let right = 1
    let down = 1
    let left = 2
    let up = 2
    let temp = []
    let ans = []
    temp = [rStart, cStart]
    ans.push(temp)
    let row = rStart
    let col = cStart
    let elementsCovered = 1
    let totalElements = m * n
    while(true){
        //right
        for(let i = 0; i < right; i++){
            col++
            if(row < 0 || col < 0 || row >= m || col >= n) continue
            temp = [row, col]
            ans.push(temp)
            //console.log(temp)
            elementsCovered++
        }
        right+=2
        if(elementsCovered === totalElements) break
        //down
        for(let i = 0; i < down; i++){
            row++
            if(row < 0 || col < 0 || row >= m || col >= n) continue
            temp = [row, col]
            ans.push(temp)
            //console.log(temp)
            elementsCovered++
        }
        down+=2
        if(elementsCovered === totalElements) break
        //left
        for(let i = 0; i < left; i++){
            col--
            if(row < 0 || col < 0 || row >= m || col >= n) continue
            temp = [row, col]
            ans.push(temp)
            //console.log(temp)
            elementsCovered++
        }
        left+=2
        if(elementsCovered === totalElements) break
        //up
        for(let i = 0; i < up; i++){
            row--
            if(row < 0 || col < 0 || row >= m || col >= n) continue
            temp = [row, col]
            ans.push(temp)
            //console.log(temp)
            elementsCovered++
        }
        up+=2
        if(elementsCovered === totalElements) break
    }
    return ans
}

console.table(spiralMatrixIII(1, 4, 0, 0))