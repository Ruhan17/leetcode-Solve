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
 var swapNodes = function(head, k) {
    if(head.next === null) return head
    let arr = []
    let ans = head
    let i = 0
    let temp1 = ans
    while(head){
        arr.push(head.val)
        head = head.next
    }
    let temp = arr[k - 1]
    let length = arr.length
    arr[k - 1] = arr[length - k]
    arr[length - k] = temp
    while(temp1){
        temp1.val = arr[i]
        temp1 = temp1.next
        i++
    }
    return ans
    
};