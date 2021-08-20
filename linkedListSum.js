/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
//     create the ListNode we will return at the end that is currently empty
    
    let list = new ListNode(0)
    let currentNode = list
    
//     sum will add values from l1 and l2 and if the sum is larger than 9 then we will set the value for carry to carry it to the next node.
    
    let sum = 0
    let carry = 0
    
// enter a while loop until l1 and l2 have values left, and we need to check if there is a leftover sum
    
    while(l1!== null || l2!== null || sum > 0){
//  if the node still has a value we need to add them to the sum
        if(l1!==null){
            sum+=l1.val
            l1 = l1.next
        }
        
        if(l2!==null){
            sum+= l2.val
            l2=l2.next
        }
        
//  if the sum is larger than 10 we have to carry the remainder to next sum

        carry = Math.floor(sum/10)
        sum = sum % 10        

//         set currentNode as the sum
        
        currentNode.next = new ListNode(sum)
        currentNode = currentNode.next
        
        
        
//        make sure there is no carry leftover so set it to sum and set carry to 0
        
        sum = carry
        carry = 0
    }
    
    return list.next
};

