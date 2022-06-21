function minRemoveToMakeValid(s){
    let stack = []
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(') stack.push(i)
        else if(s[i] === ')'){
            if(stack.length === 0){
                s = s.substring(0, i) + '-' + s.substring(i + 1);
                // console.log(i)
            }
            else stack.pop()
        }
    }
    // console.log(stack)
    for(let i = 0; i < stack.length; i++){
        s = s.substring(0, stack[i]) + '-' + s.substring(stack[i] + 1);
    }
    // /console.log(s)
    for(let i = 0; i < s.length; i++){
        if(s[i] === '-'){
            s = s.slice(0, i) + s.slice(i + 1)
            i--
        }
    }
    return s
}

console.log(minRemoveToMakeValid("a)b(c)d"))