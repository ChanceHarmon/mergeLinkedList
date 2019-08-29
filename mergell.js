'use strict'

//asume that node and liked lists occurs
//let c1 = ll1.head;
//let c2 - ll2.head;
//let ll1t = c1.next;
//let ll2t= c2.next;

function mergeLinkedLists() {
  while (ll1t && llt2) {
    c1.next = c2;
    c2.next = ll1t;
    c1 = ll1t;
    c2 = ll2t;
    ll1t = c1.next;
    ll2t = c2.next;

  }

}
mergeLinkedLists(ll1, ll2);
console.log(ll1, ll2)