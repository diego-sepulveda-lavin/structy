/* 
    get node value
    Write a function, getNodeValue, that takes in the head of a linked list and an index. 
    The function should return the value of the linked list at the specified index.

    If there is no node at the given index, then return null.

    Example1:
    // a -> b -> c -> d
    getNodeValue(a, 2); // 'c'
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

a.connect(b);
b.connect(c);
c.connect(d);

const getNodeValue = (node: Node, index: number) => {
  let current: Node | null = node;
  let currentIdx = 0;

  while (current !== null) {
    if (currentIdx === index) return current.value;
    current = current.next;
    currentIdx++;
  }
  return null;
};

// a -> b -> c -> d
console.log(getNodeValue(a, 2)); // 'c'
