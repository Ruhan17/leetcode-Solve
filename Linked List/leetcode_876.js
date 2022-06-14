function middleNode(head){
    let copyHead = head
    let i = 0
    let j = 0
    while(copyHead){
        i++
        copyHead = copyHead.next
    }
    if(i % 2 === 0) i = i / 2 + 1
    else i = Math.ceil(i / 2)
    while(head){
       j++
       if(j === i) return head
       head = head.next 
    }
}