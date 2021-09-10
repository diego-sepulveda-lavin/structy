/* 
    tree min value
    Write a function, treeMinValue, that takes in the root of a binary tree that contains number values.
    The function should return the minimum value within the tree.

    You may assume that the input tree is non-empty.

    Example:

    Input:
    //       3
    //    /    \
    //   11     4
    //  / \      \
    // 4   -2     1

    Output:
    treeMinValue(a); // -> -2
*/

export class Node {
  val: number;
  left: Node | null;
  right: Node | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeMinValue = (root: Node) => {
  const queue = [root];
  let minVal = Infinity;

  while (queue.length > 0) {
    const current = queue.shift();
    if (current) {
      if (current.val < minVal) minVal = current.val;
      current.left !== null && queue.push(current.left);
      current.right !== null && queue.push(current.right);
    }
  }

  return minVal;
};

const treeMinValue2 = (root: Node) => {
  const stack = [root];
  let minVal = Infinity;

  while (stack.length > 0) {
    const current = stack.shift();
    if (current) {
      if (current.val < minVal) minVal = current.val;
      current.right !== null && stack.push(current.right);
      current.left !== null && stack.push(current.left);
    }
  }

  return minVal;
};

const treeMinValue3 = (root: Node | null): number => {
  if (root === null) return Infinity;
  const smallestLeft = treeMinValue3(root.left);
  const smallestRight = treeMinValue3(root.right);
  return Math.min(root.val, smallestLeft, smallestRight);
};

// Iterative Breadth First
// n = number of nodes
// O(n) Time | O(n) Space
//console.log(treeMinValue(a));

// Iterative Depth First
// n = number of nodes
// O(n) Time | O(n) Space
//console.log(treeMinValue2(a));

// Recursive Depth First
// n = number of nodes
// O(n) Time | O(n) Space
console.log(treeMinValue3(a));
