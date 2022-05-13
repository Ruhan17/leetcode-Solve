//Given an m x n matrix of distinct numbers
//return all lucky numbers in the matrix in any order.
//A lucky number is an element of the matrix such that
//it is the minimum element in its row and maximum in its column.




//Let maxMin be the maximum of row minimums and minMax be the minimum of column maximums. 
//If they are equal then this single number is the only lucky number, 
//otherwise no lucky number exists.

//Consider the number M = maxMin in the matrix. 
//Let A be any number in the matrix 
//and B be the number in the same row with M and in the same column with A. 
//Number A can be lucky only if it is the minimum of its row. 
//But in this case B >= M (M is mimimal in its row) >= A (M is maximal of all minimums) 
//and A can be lucky only if B = M = A, otherwise B > A and A is not maximal in its column. 
//Thus, the only possible lucky number is the number M.

//We find maxMin and minMax and compares them.

function luckyNumbers(matrix){
    //declare necessary variables
    let maxAmongMinRow = -1;
    let maxAmongMinCol = -1;
    let minAmongMaxRow = -1;
    let minAmongMaxCol = -1;
    //var row = []
    //var col = []
    let min = Infinity
    let max = 0
    let maxAmongMin = 0
    let minAmongMax = Infinity
    let tempRow = -1
    let tempCol = -1
    let luckyNum = []

    //iterate through the matrix to get the maximum of minimums of all the rows
    for(var i = 0; i < matrix.length; i++) {
        //row = matrix[i]
        min = Infinity
        tempRow = -1
        tempCol = -1
        for(var j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] < min){
                min = matrix[i][j]
                tempRow = i
                tempCol = j
            }
        }
        if(min > maxAmongMin){
            maxAmongMin = min
            maxAmongMinRow = tempRow
            maxAmongMinCol = tempCol
        }
    }

    //iterate through the matrix to get the minimum of maximums of all the columns

    for(let i = 0; i < matrix[0].length; i++){
        //col =  matrix.map(d => d[i])
        max = 0
        tempRow = -1
        tempCol = -1
        for(var j = 0; j < matrix.map(d => d[i]).length; j++) {
            if(matrix.map(d => d[i])[j] > max){
                max = matrix.map(d => d[i])[j]
                tempRow = j
                tempCol = i
            }
        }
        if(max < minAmongMax){
            minAmongMax = max
            minAmongMaxRow = tempRow
            minAmongMaxCol = tempCol
        }
    }

    //check if both indiacate the same index

    if(minAmongMaxCol === maxAmongMinCol && minAmongMaxRow === maxAmongMinRow){
        luckyNum.push(matrix[minAmongMaxRow][minAmongMaxCol])
    }

    //return the answer

    return luckyNum
}

console.log(luckyNumbers([[7,8],[1,2]]))