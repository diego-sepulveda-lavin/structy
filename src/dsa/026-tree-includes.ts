/* 
    tree includes    
    Write a function, treeIncludes, that takes in the root of a binary tree and a target value. 
    The function should return a boolean indicating whether or not the value is contained in the tree.

    Example:
    
    Input:
    //      a
    //    /   \
    //   b     c
    //  / \     \
    // d   e     f

    output:
    treeIncludes(a, "e"); // -> true
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

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeIncludes = (root: Node, target: string | number): boolean => {
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current) {
      if (current.val === target) return true;
      current.right !== null && stack.push(current.right);
      current.left !== null && stack.push(current.left);
    }
  }
  return false;
};

const treeIncludes2 = (root: Node, target: string | number): boolean => {
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current) {
      if (current.val === target) return true;
      current.left !== null && queue.push(current.left);
      current.right !== null && queue.push(current.right);
    }
  }
  return false;
};

const treeIncludes3 = (root: Node | null, target: string | number): boolean => {
  if (root === null) return false;
  if (root.val === target) return true;

  const isLeftTarget = treeIncludes3(root.left, target);
  const isRigthTarget = treeIncludes3(root.right, target);

  return isLeftTarget || isRigthTarget;
};

// Iterative Depth First
// n = number of nodes
// O(n) Time | O(n) Space
console.log(treeIncludes(a, "e"));

// Iterative Bread First
// n = number of nodes
// O(n) Time | O(n) Space
console.log(treeIncludes2(a, "e"));

// Recursive Depth First
// n = number of nodes
// O(n) Time | O(n) Space
console.log(treeIncludes3(a, "e"));
