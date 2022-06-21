function minInsertions(s){
    let stack = []
    let ans = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(') stack.push('(')
        else{
            if(i + 1 < s.length){
                if(s[i + 1] === ')'){
                    if(stack.length !== 0) stack.pop()
                    else ans += 1
                    i++
                }
                else{
                    if(stack.length !== 0){
                        stack.pop()
                        ans += 1
                    }
                    else ans += 2 
                }
            }
            else{
                if(stack.length !== 0){
                    stack.pop()
                    ans += 1
                }
                else ans += 2
            }
        }
    }
    ans += (2 * stack.length)
    return ans
}

console.log(minInsertions("))())("))