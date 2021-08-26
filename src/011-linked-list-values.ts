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
  private val: string;
  private next: Node | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }

  connectNode(nodeB: Node) {
    this.next = nodeB;
  }

  getVal() {
    return this.val;
  }

  setVal(val: string) {
    this.val = val;
  }

  getNext() {
    return this.next;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.connectNode(b);
b.connectNode(c);
c.connectNode(d);

const linkedListValues = (head: Node | null) => {
  let values: string[] = [];
  let current = head;

  while (current !== null) {
    values.push(current.getVal());
    current = current.getNext();
  }

  return values;
};

const linkedListValues2 = (head: Node | null) => {
  const values: string[] = [];
  fillValues(head, values);
  return values;
};

const fillValues = (head: Node | null, values: string[]) => {
  if (head === null) return;
  values.push(head.getVal());
  fillValues(head.getNext(), values);
};

// O(n) Time | O(n) Space
console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]

// O(n) Time | O(n) Space
console.log(linkedListValues2(a)); // -> [ 'a', 'b', 'c', 'd' ]
