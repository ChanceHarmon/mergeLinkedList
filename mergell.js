'use strict'

let linkedlist1 = [1, 2, 3];
let linkedList2 = [4, 5, 6];

function mergeLinkedLists(linkedList1, linkedList2) {
  let returnValue = null,    // return value, first node
    previous = null;   // previous node

  while (linkedList1 && linkedList2) {
    if (linkedList1.value < linkedList2.value) {
      // l1.value < l2.value, join l1 node to the list and  step to the next l1
      previous ? previous.next = previous = linkedList1
        : returnValue = previous = linkedList1;
      linkedList1 = linkedList1.next;
    } else {
      // l2.value <= l1.value, join l2 node to the list and step to the next l2
      previous ? previous.next = previous = linkedList2
        : returnValue = previous = linkedList2;
      linkedList2 = linkedList2.next;
    }
  }
  if (!linkedList1) {
    // no more l1 nodes, join l2 to the list
    previous ? previous.next = linkedList2
      : returnValue = linkedList2;
  } else {
    // no more l2 nodes, join l1 to the list
    previous ? previous.next = linkedList1
      : returnValue = linkedList1;
  }
  return returnValue;
}

mergeLinkedLists();

console.log(linkedList2);
console.log(linkedList1);
