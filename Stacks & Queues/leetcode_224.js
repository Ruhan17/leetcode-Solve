
 function calculateInsideBracket(nums, operators){
    while(operators.length !== 0){
        let num1 = nums[nums.length - 1]
        nums.pop()
        // We have already handled one extra minus, so we will now tackle the rest of the extra minus
        if(nums.length === 0){
            let minusCount = Math.pow(-1, operators.length - 1)
            return num1 * minusCount
        }
        let num2 = nums[nums.length - 1]
        nums.pop()
        nums.push(num1 + num2)
        operators.pop()
    }
    // If there is no extra minus, we return the last remaining element as the answer
    return nums[0]
}

// Recursively handle bracket
function handleBracket(i, s){
    let nums = []
    let operators = []
    let isNegative = false
    i++
    while(s[i] !== ")"){
        if(s[i] === "+") operators.push(s[i])
        else if(s[i] === "-"){
            operators.push("+")
            isNegative = true
        }
        else if(s[i] >= "0" && s[i] <= "9"){
            let num = ""
            while(s[i] >= "0" && s[i] <= "9"){
                num += s[i]
                i++
            }
            num = parseInt(num)
            if(isNegative){
                isNegative = false
                num = -num
            }
            nums.push(num)
            i--
        }
        else if(s[i] === "("){
            let arr = handleBracket(i, s)
            i = arr[0]
            let num = arr[1]
            if(isNegative){
                isNegative = false
                num = -arr[1]
            }
            nums.push(num) 
        }
        i++
    }
    let arr = []
    arr.push(i)
    arr.push(calculateInsideBracket(nums, operators))
    return arr
}

function calculate(s) {
    let nums = []
    let operators = []
    let isNegative = false
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            let arr = handleBracket(i, s)
            i = arr[0]
            let num = arr[1]
            if(isNegative){
                isNegative = false
                num = -arr[1]
            }
            nums.push(num)
        }
        else if(s[i] >= "0" && s[i] <= "9"){
            let num = ""
            while(s[i] >= "0" && s[i] <= "9"){
                num += s[i]
                i++
            }
            num = parseInt(num)
            if(isNegative){
                isNegative = false
                num = -num
            }
            nums.push(num)
            i--
        }
        else if(s[i] === "+"){
            operators.push("+")
        }
        // Consider all the minus as plus
        else if(s[i] === "-"){
            operators.push("+")
            isNegative = true
        }
    }
    return calculateInsideBracket(nums, operators)
};

console.log(calculate("-(2-(-1-8))"))