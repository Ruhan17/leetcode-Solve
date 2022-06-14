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
 var deleteDuplicates = function(head) {
    if(head === null || head.next === null) return head
    let dummy = new ListNode()
    let ans = dummy
    while(head){
        while(head.val === head.next.val){
            while(head.val === head.next.val){
                head = head.next
                if(head.next === null) return dummy.next
            }
            head = head.next
            if(head.next === null){
                ans.next = new ListNode(head.val)
                return dummy.next
            }
        }
        ans.next = new ListNode(head.val)
        ans = ans.next
        head = head.next
        if(head.next === null){
            ans.next = new ListNode(head.val)
            return dummy.next
        }
    }
};