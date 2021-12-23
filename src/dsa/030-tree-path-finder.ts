/* 
    tree path finder
    Write a function, pathFinder, that takes in the root of a binary tree and a target value. 
    The function should return an array representing a path to the target value. 
    If the target value is not found in the tree, then return null.

    You may assume that the tree contains unique values. 

    Example:

    Input:
    //      a
    //    /   \
    //   b     c
    //  / \     \
    // d   e     f

    Output:
    pathFinder(a, 'e'); // -> [ 'a', 'b', 'e' ]
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

const pathFinder = (root: Node | null, target: number | string): null | (string | number)[] => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  let leftPath = pathFinder(root.left, target);
  if (leftPath !== null) return [root.val, ...leftPath];
  let rightPath = pathFinder(root.right, target);
  if (rightPath !== null) return [root.val, ...rightPath];

  return null;
};

const pathFinder2 = (root: Node, target: number | string) => {
  const result = pathFinderHelper(root, target);
  if (result === null) return null;
  return result.reverse();
};

const pathFinderHelper = (root: Node | null, target: number | string): null | (string | number)[] => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinderHelper(root.left, target);
  if (leftPath !== null) {
    leftPath.push(root.val);
    return leftPath;
  }

  const rightPath = pathFinderHelper(root.right, target);
  if (rightPath !== null) {
    rightPath.push(root.val);
    return rightPath;
  }

  return null;
};

// n = number of nodes
// O(n^2) Time due to spread operator | O(n) Space
console.log(pathFinder(a, "e"));

// n = number of nodes
// O(n) Time | O(n) Space
console.log(pathFinder2(a, "e"));
