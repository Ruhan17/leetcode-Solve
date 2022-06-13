function isValidSudoku(board){
    let map = new Map()
    let boardRow = null
    //check Row
    for(let i = 0; i < board.length; i++){
        map.clear()
        boardRow = board[i]
        for(let j = 0; j < boardRow.length; j++){
            if(board[i][j] === '.') continue
            if(map.has(board[i][j])) return false
            else{
                map.set(board[i][j], true)
            }
        }
    }
    //check column
    for(let i = 0; i < board.length; i++){
        map.clear()
        for(let j = 0; j < board.length; j++){
            if(board[j][i] === '.') continue
            if(map.has(board[j][i])) return false
            else map.set(board[j][i], true)
        }
    }
    //check sub-boxes
    for(let k = 0; k < 9; k += 3){
        map.clear()
        for(let i = 0; i < 3; i++){
            for(let j = k; j < k + 3; j++){
                if(board[i][j] === '.') continue
                if(map.has(board[i][j])) return false
                else map.set(board[i][j], true)
            }
        }
    }
    for(let k = 0; k < 9; k += 3){
        map.clear()
        for(let i = 3; i < 6; i++){
            for(let j = k; j < k + 3; j++){
                if(board[i][j] === '.') continue
                if(map.has(board[i][j])) return false
                else map.set(board[i][j], true)
            }
        }
    }
    for(let k = 0; k < 9; k += 3){
        map.clear()
        for(let i = 6; i < 9; i++){
            for(let j = k; j < k + 3; j++){
                if(board[i][j] === '.') continue
                if(map.has(board[i][j])) return false
                else map.set(board[i][j], true)
            }
        }
    }
}