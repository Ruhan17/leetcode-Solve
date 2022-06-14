/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if(list1 === null) return list2
    if(list2 === null) return list1
    let ans = null
    let temp = null
    if(list1.val < list2.val){
        ans = list1
        list1 = list1.next
    }
    else{
        ans = list2
        list2 = list2.next
    }
    temp = ans
    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            ans.next = list1
            ans = ans.next
            list1 = list1.next
        }
        else{
            ans.next = list2
            ans = ans.next
            list2 = list2.next
        }
    }
    if(list1 === null) ans.next = list2
    else ans.next = list1
    return temp
};