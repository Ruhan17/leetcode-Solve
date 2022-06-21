function removeKdigits(num, k){
    if(k === num.length) return '0'
    let stack = []
    let ans = ""
    let temp = k
    for(let i = 0; i < num.length; i++){
        while(k > 0 && stack.length !== 0 && stack[stack.length - 1] > num[i]){
            k--
            stack.pop()
        }
        stack.push(num[i])
        // if(stack.length === 1 && stack[0] === 0) stack.pop()
    }
    for(let i = 0; i < num.length - temp; i++){
        ans += stack[i]
    }
    ans = BigInt(ans)
    ans = ans.toString()
    return ans
}

console.log(removeKdigits("100", 1))