/* 
    breadth first values
    Write a function, breadthFirstValues, that takes in the root of a binary tree. 
    The function should return an array containing all values of the tree in breadth-first order.

    Example: 
    //      a
    //    /   \
    //   b     c
    //  / \     \
    // d   e     f

    breadthFirstValues(a); 
    -> ['a', 'b', 'c', 'd', 'e', 'f']
*/

export class Node {
  val: string | number;
  left: Node | null;
  right: Node | null;

  constructor(val: string | number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

const breadthFirstValues = (root: Node) => {
  const queue = [root];
  const treeValues = [];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current) {
      treeValues.push(current.val);
      current.left !== null && queue.push(current.left);
      current.right !== null && queue.push(current.right);
    }
  }

  return treeValues;
};

// n = number of nodes
// O(n) Time | O(n) Space
console.log(breadthFirstValues(a));
