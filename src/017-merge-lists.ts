/* 
    merge lists
    Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. 
    The function should merge the two lists together into single sorted linked list. 
    The function should return the head of the merged linked list.

    Do this in-place, by mutating the original Nodes.

    You may assume that both input lists are non-empty and contain increasing sorted numbers.

    Example:
    Input1: 5 -> 7 -> 10 -> 12 -> 20 -> 28
    Input1: 6 -> 8 -> 9 -> 25
    Output: 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 
*/

export class Node {
  private _value: number;
  private _next: Node | null;

  constructor(value: number) {
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

  printValues = () => {
    let values: number[] = [];
    let current: Node | null = this;

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values);
    return values;
  };
}

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);

a.connect(b);
b.connect(c);
c.connect(d);
d.connect(e);
e.connect(f);

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);

q.connect(r);
r.connect(s);
s.connect(t);

const mergeLists = (headA: Node, headB: Node) => {
  let currentA: Node | null = headA;
  let currentB: Node | null = headB;

  while (currentA !== null && currentB !== null) {
    const nextA: Node | null = currentA.next;
    const nextB: Node | null = currentB.next;

    if (nextA !== null && currentA.value <= currentB.value && currentB.value < nextA.value) {
      currentB !== null && (currentA.next = currentB);
      currentA = nextA;
    } else if (currentA.value <= currentB.value) {
      currentA = nextA;
    } else if (nextB !== null && currentB.value < currentA.value && currentA.value < nextB.value) {
      currentA !== null && (currentB.next = currentA);
      currentB = nextB;
    } else if (currentB.value < currentA.value) {
      currentB = nextB;
    }
  }

  headA.printValues();
  return headA;
};

mergeLists(a, q);
