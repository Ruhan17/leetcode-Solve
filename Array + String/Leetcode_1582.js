//Given an m x n binary matrix mat
//return the number of special positions in mat

//A position (i, j) is called special if mat[i][j] == 1 and
//all other elements in row i and column j are 0 

function numSpecial(mat){
    let row = []
    let oneCount = 0
    let oneRow = -1
    let oneCol = -1
    let ans = 0
    //iterate through rows & check if there is 1 exactly once
    for(let i = 0; i < mat.length; i++){
        row = mat[i]
        oneCount = 0;
        for(let j = 0; j < row.length; j++){
            if(row[j] === 1){
                oneRow = i;
                oneCol = j;
                oneCount++;
            }
        }
        //if yes, then check corresponding column if there is exactly one 1 in there too
        if(oneCount === 1){
            oneCount = 0
            col =  mat.map(d => d[oneCol])
            for(let j = 0; j < col.length; j++){
                if(col[j] === 1){
                    oneCount++;
                }
            }
            if(oneCount === 1){
                ans++
            }
        }
    }
    return ans
}

console.log(numSpecial([[1,0,0],[0,1,0],[0,0,1]]))