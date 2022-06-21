function doOR(booleanList){
    for(let i = 0; i < booleanList.length; i++){
        if(booleanList[i] === 't') return 't'
    }
    return 'f'
}

function doAND(booleanList){
    for(let i = 0; i < booleanList.length; i++){
        if(booleanList[i] === 'f') return 'f'
    }
    return 't'
}

function parseBoolExpr(expression){
    let stack = []
    for(let i = 0; i < expression.length; i++){
        if(expression[i] === ')'){
            let booleanList = []
            while(stack[stack.length - 1] !== '('){
                booleanList.push(stack[stack.length - 1])
                stack.pop()
            }
            stack.pop()
            let operator = stack[stack.length - 1]
            stack.pop()
            if(operator === '!'){
                if(booleanList[0] === 't') stack.push('f')
                else stack.push('t')
            }
            else if(operator === '|') stack.push(doOR(booleanList))
            else stack.push(doAND(booleanList))
        }
        else stack.push(expression[i])
    }
    if(stack[0] === 't') return true
    else return false
}

console.log(parseBoolExpr("&(t,f)"))