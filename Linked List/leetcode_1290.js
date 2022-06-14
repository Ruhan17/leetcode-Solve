function getDecimalValue(head){
    let ans = 0
    let i = 0
    let copyHead = head
    while(copyHead){
        i++
        copyHead = copyHead.next
    }
    while(head){
        ans += (head.val) * Math.pow(2, i)
        i--
        head = head.next
    }
    return ans
}