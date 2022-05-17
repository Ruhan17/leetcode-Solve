function escapeGhosts(ghosts, target){
    let ghostX = -1
    let ghostY = -1
    let myX = Math.abs(0 - target[0])
    let myY = Math.abs(0 - target[1])
    let ghostDistance = -1
    let myDistance = myX + myY
    //iterate through the loop
    for(let i = 0; i < ghosts.length; i++){
        //calculate distance from ghosts position to the target
        ghostX = Math.abs(ghosts[i][0] - target[0])
        ghostY = Math.abs(ghosts[i][1] - target[1])
        ghostDistance = ghostX + ghostY
        //if ghost reaches the target first, game over
        if(ghostDistance <= myDistance) return false
    }
    //otherwise, I win
    return true   
}

console.log(escapeGhosts([[1,9],[2,-5],[3,8],[9,8],[-1,3]], [8,-10]))