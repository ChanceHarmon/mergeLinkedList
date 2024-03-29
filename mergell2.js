/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */


function Node(val) {
  this.value = val;
  this.next = null;
}
let l1 = [1, 2, 3];
let l2 = [4, 5, 6];

function zip(l1, l2) {
  //declare a count called l1NodesUsed for l1 and l2NodesUsed for l2
  //if l1's length is 0, return l2
  //l2's length is 0, return l1
  //otherwise, set l1s head as the head of the zip list.
  //compare count to l2's length. If l2's length is exhausted, slice the remaining nodes off of it and add to zip list.
  //iterate l1NodesUsed count
  //set l2's head to the next node in the zip list
  //compare count to l1's length. If l1's length is exhausted, slice the remaining nodes off of it and add to zip list. 
  //repeat.
  //return when both are exahusted. 
  let l1NodesUsed = 0;
  let l2NodesUsed = 0;
  if (l1.length === 0) return l2;
  if (l2.length === 0) return l1;
  let l1.head = new Node();
  l1.head.next = l2.head;
}

return zip(l1, l2);

console.log(zip(l1, l2));