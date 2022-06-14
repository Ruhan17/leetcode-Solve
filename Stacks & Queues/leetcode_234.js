/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let stack = []
    let temp = head
    while(temp){
        stack.push(temp.val)
        temp = temp.next
    }
    temp = head
    for(let i = stack.length - 1; i >= 0; i--){
        if(stack[i] !== temp.val) return false
        temp = temp.next
    }
    return true
};