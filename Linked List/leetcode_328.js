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
 var oddEvenList = function(head) {
    if(head === null) return head
    if(head.next === null) return head
    if(head.next.next === null) return head
    let arr = []
    let ans = head
    let temp = head
    while(head){
        arr.push(head.val)
        head = head.next
    }
    let odd = []
    let even = []
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0) odd.push(arr[i])
        else even.push(arr[i])
    }
    let i = 0
    while(i < odd.length){
        temp.val = odd[i]
        temp = temp.next
        i++
    }
    i = 0
    while(i < even.length){
        temp.val = even[i]
        temp = temp.next
        i++
    }
    return ans
};