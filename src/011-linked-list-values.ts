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
  private _value: string;
  private _next: Node | null;

  constructor(value: string) {
    this._value = value;
    this._next = null;
  }

  connectNode(nodeB: Node) {
    this._next = nodeB;
  }

  get value() {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  get next() {
    return this._next;
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
    values.push(current.value);
    current = current.next;
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
  values.push(head.value);
  fillValues(head.next, values);
};

// O(n) Time | O(n) Space
console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]

// O(n) Time | O(n) Space
console.log(linkedListValues2(a)); // -> [ 'a', 'b', 'c', 'd' ]
