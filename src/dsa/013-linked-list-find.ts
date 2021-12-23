/* 
    linked list find
    Write a function, linkedListFind, that takes in the head of a linked list and a target value. 
    The function should return a boolean indicating whether or not the linked list contains the target.

    Example1:
    // a -> b -> c -> d
    linkedListFind(a, "c"); // true

    Example2:
    // 42
    linkedListFind(node1, 42); // true

    Example3:
    // 42
    linkedListFind(node1, 100); // false
*/

export class Node {
  private _value: string | number;
  private _next: Node | null;

  constructor(value: string | number) {
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

a.connect(b);
b.connect(c);
c.connect(d);

const node1 = new Node(42);

const linkedListFind = (head: Node, target: string | number): boolean => {
  let current: Node | null = head;
  while (current !== null) {
    if (current.value === target) return true;
    current = current.next;
  }

  return false;
};

const linkedListFind2 = (node: Node | null, target: string | number): boolean => {
  if (node === null) return false;
  if (node.value === target) return true;
  return linkedListFind2(node.next, target);
};

// O(n) Time | O(1) Space
// a -> b -> c -> d
console.log(linkedListFind(a, "c")); // true

// O(n) Time | O(1) Space
// 42
console.log(linkedListFind(node1, 100)); // false

// O(n) Time | O(n) Space
// a -> b -> c -> d
console.log(linkedListFind2(a, "c")); // true
