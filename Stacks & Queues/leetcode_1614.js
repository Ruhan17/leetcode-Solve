function maxDepth(s){
    let maxDepth = 0
    let count = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            count++
        }
        else if(s[i] === ')'){
            count--
        }
        if(count > maxDepth) maxDepth = count
    }
    return maxDepth
}

console.log(maxDepth("()(()())"))