/* 
    longest streak

    Write a function, longestStreak, that takes in the head of a linked list as an argument.
    The function should return the length of the longest consecutive streak of the same value within the list.

    Example:
    Input: 5 -> 5 -> 7 -> 7 -> 7 -> 6
    Output: 3
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

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.connect(b);
b.connect(c);
c.connect(d);
d.connect(e);
e.connect(f);

const longestStreak = (head: Node) => {
  if (head === null) return 0;

  let current: Node | null = head;

  let currStreakValue = current.value;
  let currStreak = 0;
  let maxStreakValue = current.value;
  let maxStreak = 0;

  while (current !== null) {
    if (current.value === currStreakValue) {
      currStreak++;
    } else {
      currStreakValue = current.value;
      currStreak = 1;
    }
    if (currStreak > maxStreak) {
      maxStreak = currStreak;
      maxStreakValue = currStreakValue;
    }
    current = current.next;
  }

  return maxStreak;
};

// O(n) Time | O(1) Space
console.log(longestStreak(a));
