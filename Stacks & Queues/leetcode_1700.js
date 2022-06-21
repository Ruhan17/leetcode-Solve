function countStudents(students, sandwiches){
    let zeroLover = 0
    let oneLover = 0
    for(let i = 0; i < students.length; i++){
        if(students[i] === 0) zeroLover++
        else oneLover++
    }
    for(let i = 0; i < sandwiches.length; i++){
        if(oneLover === 0 && sandwiches[i] === 1) return zeroLover
        else if(zeroLover === 0 && sandwiches[i] === 0) return oneLover
        if(sandwiches[i] === 0) zeroLover--
        else oneLover--
    }
    return 0
}

console.log(countStudents( [1,1,1,0,0,1], [1,0,0,0,1,1]))