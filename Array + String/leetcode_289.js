let alive = 2
let dead = 3
//list of all neighbors
let neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]

function countAlive(board, xidx, yidx){
    let x = -1
    let y = -1
    let a = -1
    let b = -1
    let aliveCount = 0

    for(let i = 0; i < neighbors.length; i++){
        x = neighbors[i][0]
        y = neighbors[i][1]

        a = xidx + x
        b = yidx + y

        if(a < 0 || b < 0 || a >= board.length || b >= board[0].length) continue
        
        if(board[a][b] === 1 || board[a][b] === dead){
            aliveCount++
        }
    }
    return aliveCount
}

function gameOfLife(board){
    let aliveMembers = -1
    //iterate through the board
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            //for each cell, calculate number of alive neighbors
            aliveMembers = countAlive(board, i, j)
            //Now implement the game logic
            if(board[i][j] === 1 && aliveMembers < 2){
                board[i][j] = dead
            }
            else if(board[i][j] === 1 && (aliveMembers == 2 || aliveMembers ===3)){
                continue
            }
            else if(board[i][j] === 1 && aliveMembers > 3){
                board[i][j] = dead
            }
            else if(board[i][j] === 0 && aliveMembers === 3){
                board[i][j] = alive
            }
        }
    }

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === dead) board[i][j] = 0
            if(board[i][j] === alive) board[i][j] = 1
        }
    }

    return board
}

console.table(gameOfLife([[1,1],[1,0]]))