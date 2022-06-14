/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    if(head.next === null) return null
    let slow = head
    let fast = head
    let i = 0
    for(i = 0; i <= n && fast !== null; i++){
        fast = fast.next
    }
    // Corner Case
    if(i !== n + 1){
        head = slow.next
        return head
    }
    // Normal Case
    while(fast !== null){
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return head
};