/* 
    tree levels
    Write a function, treeLevels, that takes in the root of a binary tree. 
    The function should return a 2-Dimensional array where each subarray represents a level of the tree.

    Example:
    Input:
    //      a
    //    /   \
    //   b     c
    //  / \     \
    // d   e     f

    Output:
    treeLevels(a); // ->
    // [
    //   ['a'],
    //   ['b', 'c'],
    //   ['d', 'e', 'f']
    // ]
*/

export class Node {
  val: string;
  left: Node | null;
  right: Node | null;

  constructor(val: string) {
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

const treeLevels = (root: Node): string[][] => {
  if (root === null) return [];
  const stack = [{ node: root, level: 0 }];

  let levels: string[][] = [];

  while (stack.length > 0) {
    const { node, level } = stack.pop()!;

    if (levels.length == level) {
      levels.push([node.val]);
    } else {
      levels[level].push(node.val);
    }

    node.right !== null && stack.push({ node: node.right, level: level + 1 });
    node.left !== null && stack.push({ node: node.left, level: level + 1 });
  }

  return levels;
};

const treeLevels2 = (root: Node): string[][] => {
  if (root === null) return [];
  const queue = [{ node: root, level: 0 }];

  let levels: string[][] = [];

  while (queue.length > 0) {
    const { node, level } = queue.shift()!;

    if (levels.length == level) {
      levels.push([node.val]);
    } else {
      levels[level].push(node.val);
    }

    node.left !== null && queue.push({ node: node.left, level: level + 1 });
    node.right !== null && queue.push({ node: node.right, level: level + 1 });
  }

  return levels;
};

const treeLevels3 = (root: Node) => {
  const levels: string[][] = [];
  _treeLevels(root, levels, 0);
  return levels;
};

const _treeLevels = (root: Node | null, levels: string[][], levelNum: number) => {
  if (root === null) return;

  if (levels.length === levelNum) {
    levels[levelNum] = [root.val];
  } else {
    levels[levelNum].push(root.val);
  }

  _treeLevels(root.left, levels, levelNum + 1);
  _treeLevels(root.right, levels, levelNum + 1);
};

// Iterative Depth First
// n = number of nodes
// Time: O(n) | Space: O(n)
console.log(treeLevels(a));

// Iterative Breadth First
// n = number of nodes
// Time: O(n) | Space: O(n)
console.log(treeLevels2(a));

// Recursive Depth First
// n = number of nodes
// Time: O(n) | Space: O(n)
console.log(treeLevels3(a));
