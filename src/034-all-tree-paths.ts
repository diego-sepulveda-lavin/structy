/* 
    all tree paths
    Write a function, allTreePaths, that takes in the root of a binary tree. 
    The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.

    The order within an individual path must start at the root and end at the leaf, 
    but the relative order of among paths in the outer array does not matter.

    You may assume that the input tree is non-empty.

    Example:
    Input:
    //      a
    //    /   \
    //   b     c
    //  / \     \
    // d   e     f

    Output:
    allTreePaths(a); // ->
    // [ 
    //   [ 'a', 'b', 'd' ], 
    //   [ 'a', 'b', 'e' ], 
    //   [ 'a', 'c', 'f' ] 
    // ] 
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

const allTreePaths = (root: Node | null): (string | number)[][] => {
  if (root === null) return [];
  if (root.left === null && root.right === null) return [[root.val]];

  const paths = [];

  const leftSubPaths = allTreePaths(root.left);
  for (const subPath of leftSubPaths) {
    paths.push([root.val, ...subPath]);
  }

  const rightSubPaths = allTreePaths(root.right);
  for (const subPath of rightSubPaths) {
    paths.push([root.val, ...subPath]);
  }

  return paths;
};


// Recursive Depth First
// n = number of nodes
// O(n) Time | O(n) Space
console.log(allTreePaths(a));
