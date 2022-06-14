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
 var deleteMiddle = function(head) {
    if(head.next === null) return null
    let length = 0
    let temp = head
    while(head){
        length++
        head = head.next
    }
    let middle = Math.floor(length / 2)
    let ans = temp
    let i = 0
    while(temp){
        if(i + 1 === middle){
            temp.next = temp.next.next
            break
        }
        temp = temp.next
        i++
    }
    return ans
};