/* 
    bottom right value
    Write a function, bottomRightValue, that takes in the root of a binary tree. 
    The function should return the right-most value in the bottom-most level of the tree.

    You may assume that the input tree is non-empty.

    Example:

    Input:
    //       3
    //    /    \
    //   11     10
    //  / \      \
    // 4   -2     1

    Output:
    bottomRightValue(a); // -> 1
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

const a = new Node(3);
const b = new Node(11);
const c = new Node(10);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const bottomRightValue = (root: Node) => {
  const queue = [root];
  let mostBottomRightValue = root.val;
  while (queue.length > 0) {
    const current = queue.shift();
    if (current) {
      mostBottomRightValue = current.val;
      current.left !== null && queue.push(current.left);
      current.right !== null && queue.push(current.right);
    }
  }
  return mostBottomRightValue;
};

// Iterative Breadth First
// n = number of nodes
// O(n) Time | O(n) Space
/* 
Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). 
JavaScript does not have a native queue data structure that is maximally efficient.
*/
console.log(bottomRightValue(a));
