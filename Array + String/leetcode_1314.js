function matrixBlockSum(mat, k){
    //first calculate prefix sum of all the blocks using [0][0] index as reference
    //To do that, we need to initialize a 2D array with fixed length & assign all indices 0 initially
    console.table(mat)
    var sumFromFirstCell = [];
    for(let i = 0; i < mat.length + 1; i++) {
        sumFromFirstCell[i] = [];
        for(let j = 0; j < mat[0].length + 1; j++) {
            sumFromFirstCell[i][j] = 0;
        }
    }
    //Now we calculate
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[0].length; j++){
            sumFromFirstCell[i + 1][j + 1] = sumFromFirstCell[i + 1][j] + sumFromFirstCell[i][j + 1] - sumFromFirstCell[i][j] + mat[i][j]
        }
    }
    console.table(sumFromFirstCell)
    //Now we calculate our answer
    //First create a 2D Array
    var ans = []
    for(let i = 0; i < mat.length; i++) {
        ans[i] = [];
        for(let j = 0; j < mat[0].length; j++) {
            ans[i][j] = 0;
        }
    }

    //Now get upper left & lower right indices & calculate our desired value for each cell
    let i1 = -1
    let j1 = -1
    let i2= -1
    let j2 = -1
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[0].length; j++){
            i1 = Math.max(0, i - k)
            j1 = Math.max(0, j - k)
            i2 = Math.min(mat.length, i + k + 1)
            j2 = Math.min(mat[0].length, j + k + 1)
            ans[i][j] = sumFromFirstCell[i2][j2] - sumFromFirstCell[i2][j1] - sumFromFirstCell[i1][j2] + sumFromFirstCell[i1][j1]
        }
    }
    //finally return the answer
    return ans
}

console.table(matrixBlockSum([[1,2,3],[4,5,6],[7,8,9]], 2))