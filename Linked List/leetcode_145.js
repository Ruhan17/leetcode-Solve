/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(head === null) return false
    let fast = head.next
    let slow = head
    while(fast !== null && slow !== null){
        if(fast === slow) return true
        if(fast.next !== null){
            fast = fast.next
            if(fast.next !== null) fast = fast.next
            else fast = null
        }
        else{
            fast = null
        }
        if(slow.next !== null) slow = slow.next
        else slow = null
    }
    return false
};