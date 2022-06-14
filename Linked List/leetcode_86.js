/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    let temp = head
    let less = []
    let greater = []
    while(temp){
        if(temp.val < x) less.push(temp.val)
        else
            greater.push(temp.val)
        temp = temp.next
    }
    let i = 0
    temp = head
    while(i < less.length){
        temp.val = less[i]
        i++
        temp = temp.next

    }
    i = 0 
    while(i < greater.length){
        temp.val = greater[i]
        i++
        temp = temp.next
    }
    return head
};