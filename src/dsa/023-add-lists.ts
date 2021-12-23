/* 
    add lists
    Write a function, addLists, that takes in the head of two linked lists, each representing a number. 
    The nodes of the linked lists contain digits as values. 
    The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. 
    The function should return the head of a new linked listed representing the sum of the input lists. 
    The output list should have it's digits reversed as well.  

    Example:
    Say we wanted to compute 621 + 354 normally. The sum is 975:

      621
    + 354
    -----
      975

    Then, the reversed linked list format of this problem would appear as:

        1 -> 2 -> 6
     +  4 -> 5 -> 3
     --------------
        5 -> 7 -> 9
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

  connect(nodeB: Node) {
    this.next = nodeB;
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

const a1 = new Node(9);
const a2 = new Node(9);
const a3 = new Node(9);
const a4 = new Node(9);
a1.connect(a2);
a2.connect(a3);
a3.connect(a4);
// 9 -> 9 -> 9 -> 9

const b1 = new Node(9);
const b2 = new Node(7);
b1.connect(b2);
// 9 -> 7

const addLists = (head1: Node, head2: Node) => {
  let current1: Node | null = head1;
  let current2: Node | null = head2;
  let dummyHead = new Node(0);
  let tail = dummyHead;
  let carry: number = 0;

  while (current1 !== null || current2 !== null || carry !== 0) {
    let value1: number = current1 !== null ? current1.value : 0;
    let value2: number = current2 !== null ? current2.value : 0;

    current1 !== null && (current1 = current1.next);
    current2 !== null && (current2 = current2.next);

    let sum = value1 + value2 + carry;
    let ones = sum % 10;
    let tens = Math.floor(sum / 10);
    carry = sum >= 10 ? tens : 0;

    let newNode: Node = new Node(ones);
    tail.next = newNode;
    tail = newNode;
  }

  return dummyHead.next;
};

// n = length of list 1
// m = length of list 2
// Time: O(max(n, m))
// Space: O(max(n, m))

// 5 -> 7 -> 9
console.log(addLists(a1, b1));

