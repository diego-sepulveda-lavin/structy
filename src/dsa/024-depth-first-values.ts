/* 
    depth first values
    Write a function, depthFirstValues, that takes in the root of a binary tree. 
    The function should return an array containing all values of the tree in depth-first order.

    Example:

    //      a
    //    /   \
    //   b     c
    //  / \     \
    // d   e     f


    depthFirstValues(a); 
    -> ['a', 'b', 'd', 'e', 'c', 'f']
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

const depthFirstValues = (root: Node) => {
  const stack = [root];
  const treeValues = [];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current) {
      treeValues.push(current.val);
      current.right !== null && stack.push(current.right);
      current.left !== null && stack.push(current.left);
    }
  }
  return treeValues;
};

const depthFirstValues2 = (node: Node | null, arr: (string | number)[] = []) => {
  if (node === null) return [];
  arr.push(node.val);
  depthFirstValues2(node.left, arr);
  depthFirstValues2(node.right, arr);
  return arr;
};

// n = number of nodes
// O(n) Time | O(n) Space
console.log(depthFirstValues(a));

// n = number of nodes
// O(n) Time | O(n) Space
console.log(depthFirstValues2(a));
