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
 var mergeNodes = function(head) {
    let sum = 0
    let ans = head.next
    let firstCount = true
    sum += ans.val
    let temp = ans
    head = ans.next
    while(head){
        if(head.val === 0){
            if(firstCount){
                ans.val = sum
                sum = 0
                firstCount = false
            }
            else{
                ans.next.val = sum
                ans = ans.next
                sum = 0   
            }
        }
        else{
            sum += head.val
        }
        head = head.next
    }
    ans.next = null
    return temp
};