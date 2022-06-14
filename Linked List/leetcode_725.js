/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
 var splitListToParts = function(head, k) {
    let temp = head
    let ans = []
    let length = 0
    while(head){
        length++
        head = head.next
    }
    let extra = length % k
    let extraCount = 0
    length = Math.floor(length / k)
    console.log(length)
    console.log(extra)
    let count = 0
    let current = temp
    let prev = null
    while(current && count < k){
        count++
        if(extraCount < extra){
            extraCount++
            ans.push(current)
            for(let i = 0; i < length + 1; i++){
                prev = current
                current = current.next
            }
            prev.next = null
        }
        else{
            ans.push(current)
            for(let i = 0; i < length; i++){
                prev = current
                current = current.next
            }
            prev.next = null
        }
    }
    if(ans.length < k){
        for(let i = ans.length; i < k; i++){
            ans.push(null)
        }
    }
    return ans
};