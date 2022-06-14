/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode()
    let ans = dummy
    let remainder = 0
    let sum = 0
    while(l1 || l2){
        sum = remainder
        if(l1 !== null){
            sum += l1.val
            l1 = l1.next
        }
        if(l2 !== null){
            sum += l2.val
            l2 = l2.next
        }
        remainder = Math.floor(sum / 10)
        sum = sum % 10
        ans.next = new ListNode(sum)
        ans = ans.next
    }
    if(remainder !== 0) ans.next = new ListNode(remainder)
    return dummy.next
};