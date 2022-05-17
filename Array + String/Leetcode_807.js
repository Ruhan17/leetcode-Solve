//Each building has max. possible height as min(maxRow, maxCol)

function maxIncreaseKeepingSkyline(grid){
    let maxRow = []
    let maxCol = []
    let max = 0
    let ans = 0
    let min = 0
    //iterate through rows to get maxRow of every row
    for(let i = 0; i < grid.length; i++){
        max = 0
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] > max){
                max = grid[i][j]
            }
        }
        maxRow.push(max)
    }

    //iterate through the columns to get maxCol every col
    for(let i = 0; i < grid[0].length; i++){
        max = 0;
        for(let j = 0; j < grid.length; j++){
            if(grid[j][i] > max){
                max = grid[j][i]
            }
        }
        maxCol.push(max)
    }
    //compare maxRow & maxCol to calculate highest possible height
    for(let i = 0; i < maxRow.length; i++){
        for(let j = 0; j < maxCol.length; j++){
            min = Math.min(maxRow[i], maxCol[j])
            //now get the amount of height can be increased
            ans += (min - grid[i][j])
        }
    }
    //return the answer
    return ans
}

console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]))