/* 
    linked list values
    Write a function, linkedListValues, that takes in the head of a linked list as an argument. 
    The function should return an array containing all values of the nodes in the linked list.

    Example 1: 

    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    // a -> b -> c -> d

    linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]

    Example 2:
    const x = new Node("x");
    const y = new Node("y");

    x.next = y;

    // x -> y

    linkedListValues(x); // -> [ 'x', 'y' ]
*/

export class Node {
  val: string;
  next: Node | null;
  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

const linkedListValues = (head: Node | null) => {
  let output: string[] = [];
  let currNode = head;

  while (currNode !== null) {
    output.push(currNode.val);
    currNode = currNode.next;
  }

  return output;
};

console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]
