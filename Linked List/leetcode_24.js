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
 var swapPairs = function(head) {
    if(head === null) return head
    if(head.next === null) return head
    let dummy = new ListNode()
    let prev = dummy
    let current = head
    while(current && current.next){
        prev.next = current.next
        current.next = prev.next.next
        prev.next.next = current
        
        prev = current
        current = current.next
    }
 	   return dummy.next
};