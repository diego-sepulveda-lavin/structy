/* 
    max root to leaf path sum
    Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. 
    The function should return the maximum sum of any root to leaf path within the tree.

    You may assume that the input tree is non-empty.

    Example:
    Input:
    //       3
    //    /    \
    //   11     4
    //  / \      \
    // 4   -2     1

    Output:
    maxPathSum(a); // -> 18
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

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(-13);
const g = new Node(-1);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

const maxPathSum = (root: Node | null): number => {
  if (root === null) return -Infinity;

  const leftSum = maxPathSum(root.left) + root.val;
  const rightSum = maxPathSum(root.right) + root.val;
  if (leftSum === -Infinity && rightSum === -Infinity) return root.val;

  return leftSum >= rightSum ? leftSum : rightSum;
};

// Recursive Depth First
// n = number of nodes
// O(n) Time | O(n) Space
console.log(maxPathSum(a));
