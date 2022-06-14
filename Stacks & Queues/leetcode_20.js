/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = []
    for(let i = 0; i < s.length; i++){
        if(s[i] === ')'){
            if(stack[stack.length - 1] === '(') stack.pop()
            else return false
        }
        else if(s[i] === '}'){
            if(stack[stack.length - 1] === '{') stack.pop()
            else return false
        }
        else if(s[i] === ']'){
            if(stack[stack.length - 1] === '[') stack.pop()
            else return false
        }
        else stack.push(s[i])
    }
    if(stack.length !== 0) return false
    return true
};