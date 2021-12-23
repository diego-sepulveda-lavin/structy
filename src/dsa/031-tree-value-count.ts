/* 
    tree value count
    Write a function, treeValueCount, that takes in the root of a binary tree and a target value. 
    The function should return the number of times that the target occurs in the tree.

    Example:
    
    Input:
    //      12
    //    /   \
    //   6     6
    //  / \     \
    // 4   6     12

    Output:
    treeValueCount(a,  6); // -> 3
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

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeValueCount = (root: Node, target: number | string) => {
  const queue = [root];
  let targetCounter = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    if (current) {
      if (current.val === target) targetCounter++;
      current.left !== null && queue.push(current.left);
      current.right !== null && queue.push(current.right);
    }
  }
  return targetCounter;
};

const treeValueCount2 = (root: Node, target: number | string) => {
  const stack = [root];
  let targetCounter = 0;

  while (stack.length > 0) {
    const current = stack.pop();
    if (current) {
      if (current.val === target) targetCounter++;
      current.left !== null && stack.push(current.left);
      current.right !== null && stack.push(current.right);
    }
  }
  return targetCounter;
};

const treeValueCount3 = (root: Node | null, target: number | string): number => {
  if (root === null) return 0;
  const match = root.val === target ? 1 : 0;
  const leftPathCounter = treeValueCount3(root.left, target);
  const rightPathCounter = treeValueCount3(root.right, target);
  return leftPathCounter + rightPathCounter + match;
};

// Iterative Breadth First
// n = number of nodes
// O(n) Time | O(n) Space
/* 
  Note: this solution should really be considered O(n^2) runtime 
  because the JavaScript shift() methods runs in O(n). 
  JavaScript does not have a native queue data structure that is maximally efficient. 
*/
console.log(treeValueCount(a, 6));

// Iterative Depth First
// n = number of nodes
// O(n) Time | O(n) Space
console.log(treeValueCount2(a, 6));

// Recursive Depth First
// n = number of nodes
// O(n) Time | O(n) Space
console.log(treeValueCount3(a, 6));
