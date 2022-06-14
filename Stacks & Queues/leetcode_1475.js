function finalPrices(prices){
    let stack = []
    for(let i = 0; i < prices.length; i++){
        while(stack.length !== 0 && prices[stack[stack.length - 1]] >= prices[i]){
            prices[stack[stack.length - 1]] = prices[stack[stack.length - 1]] - prices[i]
            stack.pop()
        }
        stack.push(i)
    }
    return prices
}

console.log(finalPrices([10,1,1,6]))