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

  let leftBranch = pathFinder(root.left, target);
  let rightBranch = pathFinder(root.right, target);

  if (leftBranch === null && rightBranch === null) return null;
  if (leftBranch !== null) return [root.val, ...leftBranch];
  if (rightBranch !== null) return [root.val, ...rightBranch];
};
console.log(pathFinder(a, "e"));
