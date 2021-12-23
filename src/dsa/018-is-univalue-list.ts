/* 
    is univalue list
    Write a function, isUnivalueList, that takes in the head of a linked list as an argument. 
    The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

    You may assume that the input list is non-empty.

    Example:
    Input: 7 -> 7 -> 7
    Output: isUnivalueList(a); // true
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

  connect(nodeB: Node) {
    this.next = nodeB;
  }

  printValues = () => {
    let values: (number | string)[] = [];
    let current: Node | null = this;

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values);
    return values;
  };
}

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.connect(b);
b.connect(c);

const isUnivalueList = (head: Node) => {
  let current: Node | null = head;

  while (current !== null) {
    if (current.value !== head.value) return false;
    current = current.next;
  }
  return true;
};

// O(n) Time || O(1) Space
console.log(isUnivalueList(a));
