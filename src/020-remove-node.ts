/* 
    remove node
    Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. 
    The function should delete the node containing the target value from the linked list and return 
    the head of the resulting linked list. If the target appears multiple times in the linked list, only 
    remove the first instance of the target in the list.

    Do this in-place.

    You may assume that the input list is non-empty.

    Example:
    Input: a -> b -> c -> d -> e -> f
    removeNode(a, "c");
    Output: a -> b -> d -> e -> f
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

  connect(nodeB: Node) {
    this.next = nodeB;
  }

  printValues = () => {
    let values: string[] = [];
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
const e = new Node("e");
const f = new Node("f");

a.connect(b);
b.connect(c);
c.connect(d);
d.connect(e);
e.connect(f);

// a -> b -> c -> d -> e -> f

const removeNode = (head: Node, target: string) => {
  if (head.value === target) return head.next;

  let current: Node | null = head;
  let prev: Node | null = null;

  while (current !== null) {
    if (current.value === target && prev instanceof Node) {
      prev.next = current.next;
      break;
    }
    prev = current;
    current = current.next;
  }

  return head;
};

// a -> b -> d -> e -> f
// O(n) Time | O(1) Space
console.log(removeNode(a, "c"));
a.printValues();
