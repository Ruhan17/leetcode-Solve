/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var pairSum = function(head) {
    let stack = []
    let temp = head
    let max = 0
    let sum = 0
    while(temp){
        stack.push(temp.val)
        temp = temp.next
    }
    temp = head
    for(let i = stack.length - 1; i >= stack.length / 2; i--){
        sum = stack[i] + temp.val
        if(sum > max) max = sum
        temp = temp.next
    }
    return max
};