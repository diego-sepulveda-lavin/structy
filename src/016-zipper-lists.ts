/* 
    zipper lists
    Write a function, zipperLists, that takes in the head of two linked lists as arguments. 
    The function should zipper the two lists together into single linked list by alternating nodes. 
    If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. 
    The function should return the head of the zippered linked list.

    Do this in-place, by mutating the original Nodes.

    You may assume that both input lists are non-empty.

    Example1:
    Input1: // a -> b -> c
    Input2: // x -> y -> z
    Output: // a -> x -> b -> y -> c -> z

    Example2:
    Input1: // s -> t
    Input2: // 1 -> 2 -> 3 -> 4
    Output: // s -> 1 -> t -> 2 -> 3 -> 4
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

  printValues = () => {
    let values: (string | number)[] = [];
    let current: Node | null = this;

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values);
    return values;
  };
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.connect(b);
b.connect(c);
c.connect(d);
// a -> b -> c -> d

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");

x.connect(y);
y.connect(z);
// x -> y -> z

const zipperLists = (headA: Node, headB: Node) => {
  let currentA: Node | null = headA;
  let currentB: Node | null = headB;

  while (currentA !== null && currentB !== null) {
    const nextA: Node | null = currentA.next;
    const nextB: Node | null = currentB.next;
    currentB !== null && (currentA.next = currentB);
    currentA = nextA;
    currentA !== null && (currentB.next = currentA);
    currentB = nextB;
  }

  headA.printValues();
  return headA;
};

// n = length of list 1, m = length of list 2
// O (min(n,m)) Time | O (1) Time
// a -> x -> b -> y -> c -> z -> d
zipperLists(a, x);
