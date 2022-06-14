/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    let dummy = new ListNode()
    dummy.next = head
    // Reach node at position left
    let leftPrev = dummy
    let curr = head
    let i = 1
    while(i !== left){
        i++
        leftPrev = curr
        curr = curr.next
    }
    // Now curr = "left", leftPrev = "node before left"
    // Now, reverse from left to right
    let j = 0
    let prev = null
    while(j < right - left + 1){
        let tempNext = curr.next
        curr.next = prev
        prev = curr
        curr = tempNext
        j++
    }
    // Now update pointers
    leftPrev.next.next = curr
    leftPrev.next = prev
    return dummy.next
};