/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeInBetween = function(list1, a, b, list2) {
    let ans = list1
    let endPart = list1
    let middlePart = list2
    let i = 0
    while(endPart){
        if(i === b){
            endPart = endPart.next
            break
        }
        endPart = endPart.next
        i++
    }
    while(list2){
        if(list2.next === null){
            list2.next = endPart
            break
        }
        list2 = list2.next
    }
    i = 0
    while(list1){
        if(i + 1 === a){
            list1.next = middlePart
            break
        }
        list1 = list1.next
        i++
    }
    return ans
};