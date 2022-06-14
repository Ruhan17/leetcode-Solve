/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var nodesBetweenCriticalPoints = function(head) {
    if(head.next.next === null) return [-1,-1]
    let arr = []
    let left = head
    head = head.next
    let right = head.next
    let i = 1
    while(right){
        if(head.val > left.val && head.val > right.val) arr.push(i)
        else if(head.val < left.val && head.val < right.val) arr.push(i)
        i++
        left = left.next
        head = head.next
        right = right.next
    }
    if(arr.length < 2) return [-1, -1]
    let minDist = Infinity
    for(i = 1; i < arr.length; i++){
        if(arr[i] - arr[i - 1] < minDist) minDist = arr[i] - arr[i - 1]
    }
    let maxDist = arr[arr.length - 1] - arr[0]
    return [minDist, maxDist]
};