/* 
    insert node
    Write a function, insertNode, that takes in the head of a linked list, a value, and an index. 
    The function should insert a new node with the value into the list at the specified index. 
    Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

    Do this in-place.

    You may assume that the input list is non-empty and the index is not greater than the length of the input list.

    Example:
    Input: a -> b -> c -> d

    insertNode(a, 'x', 2);
    Output: a -> b -> x -> c -> d

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

a.connect(b);
b.connect(c);
c.connect(d);

const insertNode = (head: Node, value: string, index: number) => {
  let currIdx = 0;
  let current: Node | null = head;
  let prev: Node | null = null;
  const newNode = new Node(value);

  while (current !== null) {
    if (index === 0) {
      newNode.next = current;
      head = newNode;
      return head;
    }
    if (currIdx == index && prev instanceof Node) {
      prev.next = newNode;
      newNode.next = current;
      return head;
    }
    currIdx++;
    prev = current;
    current = current.next;
  }

  if (currIdx === index && prev instanceof Node) {
    prev.next = newNode;
    newNode.next = null;
    return head;
  }

  return head;
};

// O(n) Time | O(1) Space
// a -> b -> c -> d
//a -> b -> x -> c -> d
console.log(insertNode(a, "x", 2));


