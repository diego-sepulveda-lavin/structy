/* 
    how high
    Write a function, howHigh, that takes in the root of a binary tree. 
    The function should return a number representing the height of the tree.

    The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.

    If the tree is empty, return -1.

    Example:

    Input:
    //      a
    //    /   \
    //   b     c
    //  / \     \
    // d   e     f

    Output:
    howHigh(a); // -> 2
*/

export class Node {
  val: number | string;
  left: Node | null;
  right: Node | null;

  constructor(val: number | string) {
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

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


const howHigh = (node: Node | null): number => {
  if (node === null) return - 1;
  const leftHigh = howHigh(node.left);
  const rightHigh = howHigh(node.right);
  return Math.max(leftHigh, rightHigh) + 1;
};

// Recursive Depth First
// n = number of nodes
// O(n) Time | O(n) Space
console.log(howHigh(a));
