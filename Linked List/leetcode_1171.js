/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var removeZeroSumSublists = function(head) {
    let prefixSum = []
    let sum = 0
    prefixSum.push(sum)
    let temp = head
    while(temp){
        sum += temp.val
        if(prefixSum.includes(sum)){
            while(prefixSum[prefixSum.length - 1] !== sum){
                prefixSum.pop()
            }
        }
        else prefixSum.push(sum)
        temp = temp.next
    }
    let i = 1
    temp = head
    while(i < prefixSum.length){
        temp.val = prefixSum[i] - prefixSum[i - 1]
        i++
        if(i === prefixSum.length) temp.next = null
        else temp = temp.next
    }
    if(i === 1) return null
    return head
};