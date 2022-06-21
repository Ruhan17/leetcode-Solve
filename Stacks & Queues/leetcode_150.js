function doArithmeticOperations(num1, num2, operator){
    if(operator === "+") return num1 + num2
    else if(operator === "-") return num1 - num2
    else if(operator === "*") return num1 * num2
    else{
        if(num1 < 0 && num2 > 0 || num1 > 0 && num2 < 0) return Math.ceil(num1 / num2)
        else return Math.floor(num1 / num2)
    }
}

function evalRPN(tokens){
    if(tokens.length === 1) return parseInt(tokens[0])
    let stack = []
    let num = null
    let num1 = null
    let num2 = null
    let result = null
    for(let i = 0; i < tokens.length; i++){
        if(tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/"){
            num2 = stack[stack.length - 1]
            stack.pop()
            num1 = stack[stack.length - 1]
            stack.pop()
            result = doArithmeticOperations(num1, num2, tokens[i])
            stack.push(result)
        }
        else{
            num = parseInt(tokens[i])
            stack.push(num)
        }
    }
    return result
}

console.log(evalRPN(["4"]))