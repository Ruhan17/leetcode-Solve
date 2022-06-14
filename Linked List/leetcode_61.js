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
 var rotateRight = function(head, k) {
    if(head === null || head.next === null) return head
    let temp = head
    let length = 0
    while(temp){
        length++
        temp = temp.next
    }
    let fromLast = k % length
    if(fromLast === 0) return head
    let slow = head
    let fast = head
    for(let i = 0; i <= fromLast; i++){
        fast = fast.next
    }
    while(fast !== null){
        slow = slow.next
        fast = fast.next
    }
    let front = slow.next
    let ans = front
    slow.next = null
    while(true){
        if(front.next === null){
            front.next = head
            return ans
        }
        front = front.next
    }
};