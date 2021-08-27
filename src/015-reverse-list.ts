/* 
    reverse list
    Write a function, reverseList, that takes in the head of a linked list as an argument. 
    The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

    Example: 
    // a -> b -> c -> d -> e -> f
    reverseList(a); // f -> e -> d -> c -> b -> a
*/

export class Node {
  private _value: string;
  private _next: Node | null;

  constructor(value: string) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }

  set value(value) {
    this._value = value;
  }

  set next(next) {
    this._next = next;
  }

  connect(node: Node) {
    this.next = node;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.connect(b);
b.connect(c);
c.connect(d);
d.connect(e);
e.connect(f);

const reverseList = (head: Node) => {
  let current: Node | null = head;
  let prev: Node | null = null;

  while (current !== null) {
    const next: Node | null = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

// O(n) Time | O(1) Space
// a -> b -> c -> d -> e -> f
console.log(reverseList(a)); // f -> e -> d -> c -> b -> a
