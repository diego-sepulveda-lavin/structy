/* 
    create linked list
    Write a function, createLinkedList, that takes in an array of values as an argument. 
    The function should create a linked list containing each element of the array as the values of the nodes. 
    The function should return the head of the linked list.

    Example1:

    createLinkedList(["h", "e", "y"]);
    Output: h -> e -> y

    createLinkedList([1, 7, 1, 8]);
    Output: 1 -> 7 -> 1 -> 8

    createLinkedList([]);
    Output = null
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
}

const createLinkedList = (arr: (string | number)[]) => {
  if (arr.length === 0) return null;
  let nodes: Node[] = [];

  for (const element of arr) {
    let newNode = new Node(element);
    nodes.push(newNode);
  }

  for (let i = 0; i < nodes.length; i++) {
    const element = nodes[i];
    if (i === nodes.length - 1) {
      element.next = null;
      break;
    }
    element.next = nodes[i + 1];
  }

  return nodes[0];
};

const createLinkedList2 = (arr: (string | number)[]) => {
  const dummyHead = new Node("");
  let current = dummyHead;

  for (const element of arr) {
    const newNode = new Node(element);
    current.next = newNode;
    current = newNode;
  }

  return dummyHead.next;
};

// n = length of values
// Time: O(n) | Space: O(n)
//console.log(createLinkedList(["h", "e", "y"]));

// n = length of values
// Time: O(n) | Space: O(n)
console.log(createLinkedList2(["h", "e", "y"]));
