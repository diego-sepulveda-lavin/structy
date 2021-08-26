/* 
    sum list
    Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. 
    The function should return the total sum of all values in the linked list.

    Example: 

    // 2 -> 8 -> 3 -> -1 -> 7
    sumList(a); // 19
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

  set value(value: number) {
    this._value = value;
  }

  set next(next: Node | null) {
    this._next = next;
  }

  connect(nodeB: Node | null) {
    this.next = nodeB;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.connect(b);
b.connect(c);
c.connect(d);
d.connect(e);

const sumList = (head: Node | null) => {
  let totalSum = 0;
  let current = head;
  while (current !== null) {
    console.log(typeof current.value, current.value);
    totalSum += current.value;
    current = current.next;
  }

  return totalSum;
};

// O(n) Time | O(1) Space
console.log(sumList(a));
