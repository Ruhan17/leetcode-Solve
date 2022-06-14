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
 * @return {ListNode}
 */
 function reverseBetween (head, left, right) {
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
var reverseKGroup = function(head, k) {
    let len = 0
    let temp = head
    while(temp){
        len++
        temp = temp.next
    }
    let left = 1
    let right = left + k - 1
    while(true){
        if(right > len) return head
        head = reverseBetween(head, left, right)
        left += k
        right += k
    }
};