// class ListNode {
//   val: number;
//   next: ListNode | null;
//
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val === undefined ? 0 : val);
//     this.next = (next === undefined ? null : next);
//   }
// }

function deleteDuplicates(head: number[]): number[] {
  head.forEach((_value, i) => {
    if (head[i] === head[i + 1]) {
      head.splice(i, 1);
    }
  })

  return head;
}

console.log(deleteDuplicates([1,1,2]))
console.log(deleteDuplicates([1,1,2,3,3]))
