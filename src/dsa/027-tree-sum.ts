/* 
    tree sum
    Write a function, treeSum, that takes in the root of a binary tree that contains number values. 
    The function should return the total sum of all values in the tree. 

    Example:

    Input:
    //       3
    //    /    \
    //   11     4
    //  / \      \
    // 4   -2     1

    Output:
    treeSum(a); // -> 21
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

const treeSum = (root: Node) => {
  const queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    let current = queue.shift();
    if (current) {
      sum += current.val;
      current.left !== null && queue.push(current.left);
      current.right !== null && queue.push(current.right);
    }
  }
  return sum;
};

const treeSum2 = (root: Node) => {
  const stack = [root];
  let sum = 0;

  while (stack.length > 0) {
    const current = stack.pop();
    if (current) {
      sum += current.val;
      current.right !== null && stack.push(current.right);
      current.left !== null && stack.push(current.left);
    }
  }
  return sum;
};

const treeSum3 = (root: Node | null): number => {
  if (root === null) return 0;
  return root.val + treeSum3(root.left) + treeSum3(root.right);
};

// Iterative Breadth First
// n = number of nodes
// O(n) Time | O(n) Space
console.log(treeSum(a));

// Iterative Depth First
// n = number of nodes
// O(n) Time | O(n) Space
console.log(treeSum2(a));

// Recursive Depth First
// n = number of nodes
// O(n) Time | O(n) Space
console.log(treeSum3(a));
