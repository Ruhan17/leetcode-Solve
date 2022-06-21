function timeRequiredToBuy(tickets, k){
    let ans = 0
    for(let i = 0; i < k; i++){
        ans += Math.min(tickets[k], tickets[i])
    }
    ans += tickets[k]
    for(let i = k + 1; i < tickets.length; i++){
        ans += Math.min(tickets[k] - 1, tickets[i])
    }
    return ans
}

console.log(timeRequiredToBuy([5,1,1,1], 0))