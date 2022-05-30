function generateMatrix(n){
    var [r, c] = [n, n]; 
    var spiralMatrix = Array(r).fill().map(()=>Array(c).fill(0));
    let count = 1
    //let ans = []
    //let elementsCovered = 0
    //let m = matrix.length
    //let n = matrix[0].length
    //let totalElements = m * n
    let rowStart = 0
    let colStart = 0
    let rowEnd = n - 1
    let colEnd = n - 1
    while(true){
        //left to right
        for(let i = colStart; i <= colEnd ; i++){
            //ans.push(matrix[rowStart][i])
            spiralMatrix[rowStart][i] = count
            count++
            //console.log(matrix[rowStart][i])
            //elementsCovered++
        }
        if(count === n * n + 1) break
        rowStart++
        //top to bottom
        for(let i = rowStart; i <= rowEnd; i++){
            //ans.push(matrix[i][colEnd])
            spiralMatrix[i][colEnd] = count
            count++
            //console.log(matrix[i][colEnd])
            //elementsCovered++
        }
        if(count === n * n + 1) break
        colEnd--
        //right to left
        for(let i = colEnd; i >= colStart; i--){
            //ans.push(matrix[rowEnd][i])
            spiralMatrix[rowEnd][i] = count
            count++
            //console.log(matrix[rowEnd][i])
            //elementsCovered++
        }
        rowEnd--
        if(count === n * n + 1) break
        //bottom to top
        for(let i = rowEnd; i >= rowStart; i--){
            //ans.push(matrix[i][colStart])
            spiralMatrix[i][colStart] = count
            count++
            //console.log(matrix[i][colStart])
            //elementsCovered++
        }
        colStart++
        if(count === n * n + 1) break

    }
    return spiralMatrix
}

console.table(generateMatrix(1))