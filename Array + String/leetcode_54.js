function spiralOrder(matrix){
    let ans = []
    let elementsCovered = 0
    let m = matrix.length
    let n = matrix[0].length
    let totalElements = m * n
    let rowStart = 0
    let colStart = 0
    let rowEnd = m - 1
    let colEnd = n - 1
    while(true){
        //left to right
        for(let i = colStart; i <= colEnd ; i++){
            ans.push(matrix[rowStart][i])
            //console.log(matrix[rowStart][i])
            elementsCovered++
        }
        if(elementsCovered === totalElements) break
        rowStart++
        //top to bottom
        for(let i = rowStart; i <= rowEnd; i++){
            ans.push(matrix[i][colEnd])
            //console.log(matrix[i][colEnd])
            elementsCovered++
        }
        if(elementsCovered === totalElements) break
        colEnd--
        //right to left
        for(let i = colEnd; i >= colStart; i--){
            ans.push(matrix[rowEnd][i])
            //console.log(matrix[rowEnd][i])
            elementsCovered++
        }
        rowEnd--
        if(elementsCovered === totalElements) break
        //bottom to top
        for(let i = rowEnd; i >= rowStart; i--){
            ans.push(matrix[i][colStart])
            //console.log(matrix[i][colStart])
            elementsCovered++
        }
        colStart++
        if(elementsCovered === totalElements) break

    }
    return ans
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))