/* 
    intersection
    Write a function, intersection, that takes in two arrays, a,b, as arguments.
    The function should return a new array containing elements that are in both of the two arrays.

    You may assume that each input array does not contain duplicate elements.

    Examples:
    intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
    intersection([2,4,6], [4,2]) // -> [2,4]
*/

const intersection = (a: number[], b: number[]): number[] => {
  const setA: Set<number> = new Set(a);
  const sharedNums: number[] = [];

  for (const num of b) {
    if (setA.has(num)) {
      sharedNums.push(num);
    }
  }

  return sharedNums;
};

// O(n+m) Time where n is length of array a and m is length of array b || O(n) Space
console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])); // -> [2,6]
console.log(intersection([2, 4, 6], [4, 2])); // -> [2,4]
